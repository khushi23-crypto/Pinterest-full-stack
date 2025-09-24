var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

const localStrategy=require("passport-local");
passport.authenticate(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res) {
  res.render("index");
});

router.post("/register", function (req, res) {
  const {username,email,fullname}=req.body;
  const userData=new userModel({username,email,fullname});

  userModel.register(userData, req.body.password) 
  .then(function(){
    passport.authenticate("local")(req,res.function(){
      res.redirect("/profile")
    })
  })
  })
module.exports = router;