const { MongoClient } = require("mongodb");

function myDB() {
	const myDB = {};

	const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

	myDB.getCaldata = async () => {
		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db("jobapps");
		const jobcalendar = db.collection("jobcalendar");
		const query = {};
		console.log(jobcalendar.find(query).toArray());
		return jobcalendar.find(query).toArray();
	};
	/*return [
			{
				Stage: "Online Assesment",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
			{
				Stage: "1st Interview",
				Company: "Google",
				Date: new Date(),
			},
		];
	};*/

	return myDB;
}

module.exports = myDB();

// Replace the uri string with your MongoDB deployment's connection string.

