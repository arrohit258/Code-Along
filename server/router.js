
const express=require('express')
const router=express.Router();
const axios = require('axios');



router.post("/getOutput",(req,res)=>{
    const {code,language,input}=req.body
    //console.log(req.body)
    const data ={
           code,
           language,
           input
    }


axios.post('https://codexweb.netlify.app/.netlify/functions/enforceCode',data)
.then(function (response) {
    
  const output=response.data.output

  return res.send(output)
})
.catch(function (error) {
  console.log(error);
});
    
   
})

module.exports=router