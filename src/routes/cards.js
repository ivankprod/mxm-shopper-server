import express from "express";

import cardsSellers from "#core/store/cards-sellers.json" with { type: "json" };
import cardsTrending from "#core/store/cards-sellers.json" with { type: "json" };

export const routeCards = express.Router();

routeCards.get("/get", (req, res) => {
	let result = [];

	switch (req.query.type) {
		case "sellers": result = cardsSellers; break;
		case "trending": result = cardsTrending; break;
		default: break;
	}

	res.json(result);
});

export default routeCards;
