const express= require('express');
const usersproduct = require('./data/usersproduct');
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world !!');
});
app.get('/makeup',(req,res)=>{
res.send([1, 2, 3]);
});
//  /api/makeup/1
app.get('/makeup/usersproduct/:id',(req,res, next) => {
    const user = usersproduct.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next();
  });

app.get('/makeup/userspoduct/:userId', (req, res) => {
    const userId = req.params.userId;
    // Use userId as needed
})
//port
const port= process.env.port|| 3000;
app.listen(3000,()=>console.log(`Listening on Port ${port}..`));


