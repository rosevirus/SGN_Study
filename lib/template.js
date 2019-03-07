module.exports = {
  html: function (title, list, body, controls) {
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
      ${controls}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (filelist) {
    var list = '<ul>';
    var i = 0;
    for (i=0; i < filelist.length; i++) {
      list = list + `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`
    }
    list = list + '</ul>';
    return list;
  }
}

