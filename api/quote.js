var fs = require("fs");
var path = require("path");

module.exports = (req, res) => {
  var obj;
  fs.readFile(path.join(__dirname, "_files", "quotes.json"), "utf8", function (
    err,
    data
  ) {
    if (err) throw err;
    obj = JSON.parse(data);
  });
  res.send(obj);
};
