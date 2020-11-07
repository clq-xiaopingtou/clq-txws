let express = require("express");
// 获取路由表方法
let router = express.Router();
// 连接数据库
const user = require("../sql/user");


// 对页面进行渲染
router.get("/", function (req, res, next) {
  console.log('此时已经进入login1');
  // 渲染页面,login10
  res.render("login10")
});

// in方法
// console.log(1);
router.post("/in", function (req, res, next) {
  console.log("进入login1的in处理");
  console.log(2);
  // 获取页面数据
  let obj = req.body;
  console.log(obj);
  console.log(obj.username);
  console.log(obj.password);

  // 查询数据库有没有用户输入的账号密码，有的话跳转页面
  user.findOne(obj, (err, data) => {
    if (err) {
      // 处理错误
      console.log(err);
    }
    if (data) {
      // cook数据
      res.cookie('islogin', 'ok')
      req.session.islogin = 'ok'
      // 有的话
      console.log('我在login路由in里');
      res.redirect('/pro');
      // console.log(1);
    } else {
      // 没有的话
      res.redirect('/register4')
    }
  });
});












module.exports = router;
