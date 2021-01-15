var fs = require("fs");
var path = require("path");

module.exports = (req, res) => {
  const file = fs.readFileSync(
    path.join(__dirname, "_files", "quotes.json"),
    "utf8"
  );
  var obj = JSON.parse(file);
  res.json(obj.quotes[Math.floor(Math.random() * obj.quotes.length)]);
};
