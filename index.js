const express= require('express');
const usersproduct = require('./data/usersproduct');

const app=express();
// app.get('/',(req,res)=>{
//     res.send('hello world !!');
// });
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
      form:"your form is here \ <form> <label for='review'>Review:</label><input type='text' id='review' name='review' ><br> <label for='Comment'>Comment:</label><br><input type='text' id='Comment' name='Comment'><br><br> <input type='submit' value='Submit'> </form> \ "
            
      ,
  };
////https://pugjs.org/api/getting-started.html
  res.render("index", options);
});

 // });
///////************************************** */


//port
const port= process.env.port|| 3000;
app.listen(3000,()=>console.log(`Listening on Port ${port}..`));


