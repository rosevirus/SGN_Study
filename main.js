var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHtmls(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}
function templateLists(filelist){
  var list = '<ul>';
        var i = 0;
        while (i < filelist.length) {
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i++;
        }
        list = list + '</ul>';
        return list;
}
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        var title = 'Welcome';
        var description = 'Hello';
        var list = templateLists(filelist);
        var template = templateHtmls(title, list, ` <h2>${title}</h2><p>${description}</p>`);
        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
        fs.readdir('./data', function (error, filelist) {
          var title = queryData.id;
          var list = templateLists(filelist);
          var template = templateHtmls(title, list, ` <h2>${title}</h2><p>${description}</p>`);

          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(9999);