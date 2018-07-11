# Express

Express 是一个简洁而灵活的node.js Web应用框架，提供了一系列强大特性帮助你创建各种Web应用和丰富的HTTP工具。使用Express可以快速搭建一个完整功能的网站。

## 1.Express框架核心特性：

    可以设置中间件来响应HTTP请求。

    定义了路由表用于执行不同的HTTP请求动作。

    可以通过向模板传递参数来动态渲染HTML页面。

## 2.重要模块
    body-parser —— node.js中间件，用于处理JSON，Raw，Text和URL编码的数据。

    cookie-parser —— 解析cookie的工具，通过req.cookies可以获取到传过来的cookie，并封装为对象。

    multer —— node.js中间件，用于处理enctype=“multipart/form-data”(设置表单的MIME编码)的表单数据。