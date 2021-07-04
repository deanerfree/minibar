const { Connection, Request } = require("tedious");
// Create connection to database
const config = {
	authentication: {
		options: {
			userName: "zeus", // update me
			password: "0lympi@!", // update me
		},
		type: "default",
	},
	server: "coril-test-sql-server.database.windows.net", // update me
	options: {
		database: "KurtTest", //update me
		encrypt: true,
	},
};

const connection = new Connection(config);
// Attempt to connect and execute queries if connection goes through
connection.on("connect", (err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log("Connected to Azure App Service");
		// queryDatabase();
	}
});
connection.connect();

module.exports = connection;
