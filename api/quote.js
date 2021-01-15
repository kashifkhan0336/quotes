var fs = require("fs");
var path = require("path");

module.exports = (req, res) => {
  const file = fs.readFileSync(
    path.join(__dirname, "_files", "quotes.json"),
    "utf8"
  );
  res.json({ msg: file });
};
