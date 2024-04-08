import express from "express";

const app = express();

const arrSellers = [
	{
		title: "Boat Rockerz 334",
		reviews: 75,
		price: 20,
		discount: 60,
		color: "mint-cream"
	}, {
		title: "Boat kerz 235",
		reviews: 75,
		price: 40,
		color: "light-cyan"
	}, {
		title: "Boat Rockerz 324",
		reviews: 75,
		price: 30,
		discount: 40,
		color: "light-mallow"
	}
];

const arrTrending = [
	{
		title: "Boat Rockerz 335",
		reviews: 75,
		price: 20,
		discount: 60,
		color: "dark-blue-alice"
	}, {
		title: "Boat kerz 236",
		reviews: 75,
		price: 40,
		color: "light-blue-alice"
	}, {
		title: "Boat Rockerz 325",
		reviews: 75,
		price: 30,
		discount: 40,
		color: "paleturquoise"
	}
];

app.get("/get-cards", (req, res) => {
	let result = [];

	switch (req.query.type) {
		case "sellers": result = arrSellers; break;
		case "trending": result = arrTrending; break;
		default: break;
	}

	res.send(result);
});

app.listen(8000, () => {
	console.log("Listening at localost:8000");
});
