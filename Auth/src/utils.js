const crypt = require("bcrypt");

function hashPassword(password = "") {
    const salt = crypt.genSaltSync(12);
    const hashedPassword = crypt.hashSync(password, salt);
    return hashedPassword;
}

module.exports = {
    hashPassword
}
