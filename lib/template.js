var cookie = require('cookie');

function authIsOwner(request, response) {
  var isOwner = false;
  var cookies = {};
  if (request.headers.cookie !== undefined) {
    cookies = cookie.parse(request.headers.cookie);
  }
  if (cookies.email === 'sgn@gmail.com' && cookies.password === '1126611') {
    isOwner = true;
  }
  return isOwner;
}

module.exports = {
  html: function (title, list, body, controls, authStatusUI) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      ${authStatusUI}
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${controls}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (filelist) {
    var list = '<ul>';
    var i = 0;
    for (i = 0; i < filelist.length; i++) {
      list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`
    }
    list = list + '</ul>';
    return list;
  },
  authStatusUI: function (request, response) {
    var authStatusUI = '<a href="/login">login</a>'
    if (authIsOwner(request, response)) {
      authStatusUI = '<a href="/logout_process">logout</a>'
    }
    return authStatusUI;
  }
}