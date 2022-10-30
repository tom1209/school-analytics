import { MongoClient } from 'mongodb';

/**
 * API for creating new students
 * - will connect to the DB
 * - Form the data from the req object, to send to the DB
 * - Update the school with the new student
 * - Note: If the school does not exist it will be added
 */
async function handler(req, res) {
    const {student, school} = req.body;
    const connectionString = process.env.MONGODB_URI;

    MongoClient.connect(connectionString, (err, db)=> {
  
        if (err) {
            res.status(500).json({message: "Error connecting to the db"})
            throw err;
        } 

        const dbo = db.db("schools-analytics");

        const update = {
            name: student.name,
            grades: [...student.grades]
        }

        try {
            dbo.collection("schools").updateOne(
                {name: school},
                {$push:{students: update}},
                {upsert: true} 
            )

            res.status(201).json({message: "Student successfully added to the database"})
        }
        catch(e) {
            res.status(500).json({message: "Error adding a student to the DB"})
        }
    });
}

export default handler;