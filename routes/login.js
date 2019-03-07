var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/login', function (request, response) {
  var title = 'Login';
  var list = template.list(request.list);
  var html = template.html(title, list,
    ` <form action="/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="password" placeholder="password"></p>
        <p><input type="submit"></p>
      </form>
      `, `<a href="/login_process">login</a>`,
    template.authStatusUI(request, response)
  );
  response.send(html);
});

router.post('/login_process', function (request, response) {
  var post = request.body;
  if (post.email === 'sgn@gmail.com' && post.password === '1126611') {
    response.append('Set-cookie', [
      `email=${post.email}`,
      `password=${post.password}`,
      `nickname=ASS`
    ])
    response.redirect('/');
  } else {
    response.redirect('/');
  }
});

router.post('/logout_process', function (request, response) {
  var post = request.body;
  response.append('Set-cookie', [
    `email=${post.email}; Max-Age=0`,
    `password=${post.password}, Max-Age=0`,
    `nickname=ASS, Max-Age=0`
  ])
  response.redirect('/');
});

module.exports = router;