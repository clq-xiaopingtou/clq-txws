let express = require("express");
// 建立一个路由空表
let router = express.Router();
// 引入user模型 类似于王者荣耀6神装设计
const user = require("../sql/user");

// 渲染页面
router.get("/", function (req, res, next) {
  console.log("此时进入register4");
  // 渲染页面
  res.render("register10")
});


// in方法
router.post("/in", function (req, res, next) {
  console.log('此时进入register4的in处理');

  let obj = req.body;
  console.log(obj);
  console.log(obj.username);
  console.log(obj.password);


  // 解决重复用户
  user.insertMany(obj, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);

    if (data) {
      res.redirect('/register4')
    } else {
      res.redirect('/login1')
    }

  })

  //解决用户重复第二种写法
  // user.findOne({ username: obj.username }, (err, data) => {
  //   if (err) {
  //     //发送错误日志 可以写进数据库
  //     console.log(err)
  //   }
  //   if (data) {
  //     res.redirect('/register4')
  //   } else {
  //     user.insertMany(obj, (err, data) => {
  //       if (err) {
  //         console.log(err)
  //       }
  //       console.log(data)
  //       res.redirect('/login1')
  //     })
  //   }
  // })

})



// 暴露
module.exports = router;
