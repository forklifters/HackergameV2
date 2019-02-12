var query = require('../../database/dbquery.js');

const clanInfo = (name) => {
    return new Promise(async(resolve, reject) => {
        let clanUuid = await query("SELECT uuid FROM clans WHERE name='"+name+"';");
        let clanInfo = await query("SELECT * FROM clans WHERE uuid='"+clanUuid[0].uuid+"';");
        let members = JSON.parse(clanInfo[0].members);
        console.log(members.names);
        resolve(members.names);
    });
}

module.exports = clanInfo;