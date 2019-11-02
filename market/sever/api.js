"use strict"
const models = require("./db")
const express = require('express')
const router = express.Router();
router.post('/register',(req,res) => {
  models.Login.find({username : req.body.username},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      if(data.length==0){
        // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
          let newAccount = new models.Login({
            username : req.body.username,
            password : req.body.password
        });
        // 保存数据newAccount数据进mongoDB
        newAccount.save((err,data) => {
          if (err) {
            res.send(err);
          } else {
            res.send('createAccount successed');
          }
        });
      }else {
        res.send("用户存在");
      }
    }
  });
});
router.post('/login',(req,res) => {
  models.Login.find({username : req.body.username},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      if(data.length==0){
        res.send("用户不存在");
      }else{
        // 通过模型去查找数据库
        models.Login.find({username : req.body.username,
          password : req.body.password},(err,data) => {
          if (err) {
            res.send(err);
          } else {
            res.send(data);
          }
        });
      }
    }
  })
});
router.post('/person/addgoods',(req,res) => {
  models.Goods.find({goodsname : req.body.goodsname},(err,data) => {
    if (err) {
      res.send(err);
    } else {
      if(data.length==0){
        // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
        let newAccount = new models.Goods({
          goodsname : req.body.goodsname,
          price : req.body.price
        });
        // 保存数据newAccount数据进mongoDB
        newAccount.save((err,data) => {
          if (err) {
            res.send(err);
          } else {
            res.send('createAccount successed');
          }
        });
      }else {
        res.send("商品存在");
      }
    }
  });
});
module.exports = router;
