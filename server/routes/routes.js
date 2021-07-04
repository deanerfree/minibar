const router = require("express").Router();
const sql = require("mssql");
// const { Request } = require("tedious");
const config = require("../plugins/config");

router.get("/", async (req, res) => {
	try {
		await sql.connect(config);
		result = await sql.query`SELECT * FROM dbo.drinks;`;
		console.log("This is the result:", result);
		// const queryDatabase = () => {
		// 	console.log("Reading rows from the Table...");
		// 	// Read all rows from table
		// 	const sql = `SELECT * FROM dbo.drinks;`;
		// 	const request = new Request(sql, (err, rowCount) => {
		// 		if (err) {
		// 			console.error(err.message);
		// 		} else {
		// 			console.log(`${rowCount} row(s) returned`);
		// 		}
		// 	});
		// 	request.on("row", (columns) => {
		// 		columns.forEach((column) => {
		// 			console.log("%s\t%s", column.metadata.colName, column.value);
		// 		});
		// 	});
		// 	connection.execSql(request);
		// };
		res.status(200).send(result);
	} catch (error) {
		console.error("This is the Error:", error);
	}
});

router.post("/", (req, res) => {
	try {
		res.status(200).send("Post");
	} catch (error) {
		console.error("This is the Error:", error);
	}
});
module.exports = router;
