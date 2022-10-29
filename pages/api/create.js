import { MongoClient } from 'mongodb';

async function handler(req, res) {
    //TODO Check post, req params for new student

    const connectionString = process.env.MONGODB_URI;

    MongoClient.connect(connectionString, (err, db)=> {
  
        if (err) {
            res.status(500).json({message: "Error connecting to the db"})
            throw err;
        } 

        const dbo = db.db("schools-analytics");

        //const query = { name: "University of Toronto" };
        const update = {
            name: "Stephen King",
            grades: [
                {
                    class: "Horror Writing",
                    mark: 98
                }
            ]
        }

        try {
            dbo.collection("schools").updateOne(
                {name: "University of Toronto"},
                {$push:{students: update}},
                {upsert: true} 
            )

            res.status(201).json({message: "Student successfully added to the database"})
        }
        catch(e) {
            res.status(500).json({message: "Error adding a student to the DB"})
        }
    });

    //TODO: API resolved without sending a response for /api/create, this may result in stalled requests
}

export default handler;