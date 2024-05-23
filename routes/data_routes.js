const express = require('express');
const router = new express.Router();
const fs = require('fs');
router.use(express.json());



//POST
router.post('/postData', (req,res)=>{

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    cosole.error(err);
  }
    const tempArray = JSON.parse(data);
    const newData = req.body;
    tempArray.push(newData);

    const stringData = JSON.stringify(tempArray, null, 2);

    fs.writeFile('data.json', stringData, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('New hospital added successfully!');
      }
    });
  });
});


//GET
router.get('/getData',(req,res)=>{
   fs.readFile('data.json',{encoding:'utf-8'},(data,err)=>{
    if(err){
        res.send(err)
    }
    else
    res.send(data)
   })
});


//DELETE
router.delete('/deleteData',(req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err){
            res.send(err)
        }
        const tempArray = JSON.parse(data);
        tempArray.pop();
        res.send("Deleted")
        const rmData = JSON.stringify(tempArray, null, 2);
        fs.writeFile('data.json', rmData, (err) => {
            if (err) {
              res.send(err);
            } 
          })
    })
});

//Update
router.put('/updateData',(req,res)=>{

  fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    cosole.error(err);
  }
    const tempArray = JSON.parse(data);
    const newData = req.body;
    tempArray.splice(1,1,newData);

    const stringData = JSON.stringify(tempArray, null, 2);

    fs.writeFile('data.json', stringData, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Updated successfully!');
      }
    });
  });
});







module.exports = router;