import { MongoClient } from 'mongodb';

/**
 * API for getting school/student data
 * - will make a connection to the DB
 * - use the schoolname from the query and make a request
 * - return the data from the matching school
 */
async function handler(req, res) {

  const name = req.query.name; //Query for school
  const connectionString = process.env.MONGODB_URI;

  /** Open a DB connection */
  MongoClient.connect(connectionString, (err, db)=> {
    if (err) {
      res.status(500).json({message: "Error connecting to the db"})
      throw err;
    } 

    const dbo = db.db("schools-analytics");
    const query = { name: name };

    /** Attempt to query DB with search data, return school data if found */
    try {
      dbo.collection("schools").find(query).toArray(function(err, result) {
        if (err) {
          res.status(500).json({message: "Error with retrieving data from the database"})
          throw err;
        }  
        
        res.status(200).json(result);
        db.close();
      });
    }
    catch(e) {
      res.status(500).json({message: "Error searching the Database"})
    }
  });
}

export default handler;