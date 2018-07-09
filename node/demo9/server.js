let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.query.name,
       last_name:req.query.age
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.body.name,
       last_name:req.body.age
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

let server = app.listen(8081, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})