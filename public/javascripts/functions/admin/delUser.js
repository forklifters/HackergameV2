const query = require('../../database/dbquery.js');

const deleteUser = (uuid) => {
	return new Promise(async(resolve, reject) => {
		var tables = ["lastactivity",
				"levels",
				"logins",
				"admins",
				"money",
				"userdata",
				"cashbonus",
				"stocks",
				"inventory"];

		for(var i in tables) {
			await query("DELETE FROM "+tables[i]+" WHERE uuid='"+uuid+"';");
		}

		resolve();
	});

}

module.exports = deleteUser;
