import { MongoClient } from 'mongodb';

async function handler(req, res) {

  // if(req.method !== 'POST') {
  //   return;
  // }

  // const name = req.body;
  // const {name} = data;
  const name = req.query.name;
  const connectionString = process.env.MONGODB_URI;

  MongoClient.connect(connectionString, (err, db)=> {
    if (err) {
      res.status(500).json({message: "Error connecting to the db"})
      throw err;
    } 

    const dbo = db.db("schools-analytics");
    const query = { name: name };

    dbo.collection("schools").find(query).toArray(function(err, result) {
      if (err) {
        res.status(500).json({message: "Error with retrieving data from the database"})
        throw err;
      }  
      
      res.status(200).json(result);
      db.close();
    });
  });
}

export default handler;