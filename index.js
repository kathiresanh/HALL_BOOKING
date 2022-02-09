const express = require("express")

const app = express();
app.use(express.json())
const cors = require("cors")
const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient;
const URL ="mongodb+srv://kathir:kathir12345@cluster0.jnknh.mongodb.net?retryWrites=true&w=majority"
let options ={
    origin:"*"
}
app.use(cors(options))

app.post("/createroom",async function(req,res){
    try {
        let connection = await mongoClient.connect(URL);
       let db = connection.db("facebook")
      let user =  await db.collection("hallbook").insertOne(req.body)
       res.json({message:"room created"})
    } catch (error) {
        console.log(error)
        res.json({message:"something went wrong"})
    }
})

app.post("/bookroom",async function(req,res){
    try {
        let connection = await mongoClient.connect(URL);
       let db = connection.db("facebook")
      let user =  await db.collection("hallusers").insertOne(req.body)
       res.json({message:"room booked"})
    } catch (error) {
        console.log(error)
        res.json({message:"internal server error"})
        res.json({message:"something went wrong"})
    }
})



app.get("/getbookedrooms",async function(req,res){
    try {
        let connection = await mongoClient.connect(URL);
       let db = connection.db("facebook")
      let user =  await db.collection("hallusers").find({}).toArray();
       res.json(user)
    } catch (error) {
        console.log(error)
        res.json({message:"internal server error"})
        res.json({message:"something went wrong"})
    }
})



app.get("/getcustomers",async function(req,res){
    try {
        let connection = await mongoClient.connect(URL);
       let db = connection.db("facebook")
      let user =  await db.collection("hallusers").find({}).toArray();
       res.json(user)
    } catch (error) {
        console.log(error)
        res.json({message:"internal server error"})
        res.json({message:"something went wrong"})
    }
})


app.listen(process.env.PORT || 3001)