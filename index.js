const express= require('express');
const bodyParser = require("body-parser");
const usersproduct = require('./data/usersproduct');
const customerposts = require('./data/customerposts');
const Brands = require('./data/Brands')
const app=express();
// app.get('/',(req,res)=>{
//     res.send('hello world !!');
// });

//  /makeup/usersproduct/1
app.get('/makeup/usersproduct/:id',(req,res, next) => {
    const user = usersproduct.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next();
  });

app.get('/makeup/customerposts/:id', (req, res,next) => {
  const user = customerposts.find((uu) => uu.id == req.params.id);
    if (user) res.json(user);
    else next();
    // Use userId as needed
});

//renering view**********************************///
//app.get('/',(req,res)=>{
 
   
app.use(express.static("./styles"));

// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.get("/", (req, res) => {
  const options = {
    title: "Welcome To Our ULTA Makeup Store",
    content:
      "You can put your review \ <a href='/'>insert your Comment and Review</a>, \ ",
     
  };
////https://pugjs.org/api/getting-started.html
  res.render("index", options);
});

 // });
///////************************************** */


//port
const port= process.env.port|| 3000;
app.listen(3000,()=>console.log(`Listening on Port ${port}..`));


