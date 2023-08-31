const express =require('express');
const app = express()
const cors = require('cors')
const {connectToDb , getdb} = require('./db');
app.use(express.json());
app.use(cors());

connectToDb((err)=>{
    if(!err){
        app.listen('5000',(req , res)=>{
            console.log('working ....');
        })
    }

})

app.post('/patient', (req , res)=>{
    const post = req.body;
    let db = getdb();

    db.collection('patient1').updateOne(
        {UserName},
        {
            $set:{
                post

            }
        },
        {
            upsert:true
        }

    )
    .then(result =>{
        res.send("Posted Succesfully");
        console.log(result);
    })
    .catch(err =>{
        res.status(500).json({err:"Some error occured"})
    })
})