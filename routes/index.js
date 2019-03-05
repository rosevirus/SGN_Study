var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var fs = require('fs');

router.get('/', function (request, response) {
  var title = 'Welcome';
  var description = 'Hello';
  var list = template.list(request.list);
  var html = template.html(title, list,
    ` <h2>${title}</h2>
      <p>${description}</p>
        <img src="/images/hello.jpg" style="width: 480px; margin: 2px;" >
      `,
    `<a href="/topic/create">create</a>`);
  response.send(html);
});

module.exports = router;