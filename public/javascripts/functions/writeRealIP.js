const query = require('../database/dbquery.js');

const writeRealIP = (req, uuid, realip) => {
    return new Promise(async(resolve, reject) => {
        var regex = ["::1", "::ffff:127.0.0.1", "127.0.0.1"];
        if(regex.indexOf(realip) > -1) {
            resolve();
        } else {
            var sql = "UPDATE logins SET updated_realip='" + realip + "' WHERE uuid='" + uuid + "';";
            await query(sql);
            resolve();
        }
    });
}

module.exports = writeRealIP;
