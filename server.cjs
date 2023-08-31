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

app.post('/patient', async (req , res)=>{
    const post = req.body;
    let db = getdb();

   const mergedDocument = await db.collection('patient1').findOneAndUpdate(
    {_id:'merged'},
    {
        $addtoSet:{
            post
        },
    },
        {
            upsert:true,
            returnOriginal:false
        }
    
   )

   res.send('Sent Successfully');
   console.log(mergedDocument);
})