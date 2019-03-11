var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var cookieParser = require('cookie-parser');

app = express();
app.use(cookieParser());

router.get('/login', function (request, response) {
  var title = 'Login';
  var list = template.list(request.list);
  var html = template.html(title, list,
    ` <form action="/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="password" placeholder="password"></p>
        <p><input type="submit"></p>
      </form>
      `,'',
    template.authStatusUI(request, response)
  );
  response.send(html);
});

router.post('/login_process', function (request, response) {
  var post = request.body;
  if (post.email === 'sgn@gmail.com' && post.password === '1126611') {
    response.cookie('email', post.email);
    response.cookie('password', post.password);
    response.cookie('nickname', 'ASS');
    
    response.redirect('/');
  } else {
    response.redirect('/');
  }
});

router.get('/logout_process', function (request, response) {
  response.clearCookie('email');
  response.clearCookie('password');
  response.clearCookie('nickname');

  response.redirect('/');
});

module.exports = router;