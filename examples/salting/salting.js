const crypto = require("crypto");
var genRandomString = function (length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};

var sha256 = function (password, salt) {
  var hash = crypto.createHmac("sha256", salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest("hex");
  return {
    salt: salt,
    passwordHash: value,
  };
};

var randSalt = genRandomString(32);
console.log(randSalt);
var hashed = sha256("testpass", randSalt);
console.log(hashed);
var testHashed = sha256("testpass", hashed["salt"]);
var testHashed2 = sha256("testpass1", hashed["salt"]);
console.log(
  "testing testpass = hash: " +
    (hashed["passwordHash"] == testHashed["passwordHash"])
);
console.log(
  "testing testpass1 = hash: " +
    (hashed["passwordHash"] == testHashed2["passwordHash"])
);
