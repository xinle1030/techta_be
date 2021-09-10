var express = require("express");
var app = express();
const path = require('path')


// static assets, use all the static assets in methods-public folder
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, './views/index.html'))
    res.render("index")
  })

//  ===========
//  AUTH ROUTES
//  ===========

// show register form
app.get("/register", function(req, res){
  res.render("signUp"); 
});

//handle sign up logic
// app.post("/register", function(req, res){
//    let newUser = new User({username: req.body.username});
//    User.register(newUser, req.body.password, function(err, user){
//        if(err){
//            console.log(err);
//            return res.render("register");
//        }
//        passport.authenticate("local")(req, res, function(){
//           res.redirect("/campgrounds"); 
//        });
//    });
// });

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
  