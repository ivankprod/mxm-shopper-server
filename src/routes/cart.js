import fs from "fs";
import express from "express";

import cart from "#core/store/cart.json" with { type: "json" };

export const routeCart = express.Router();

routeCart.get("/get", (_, res) => {
	res.json(cart);
});

routeCart.post("/add", (req, res) => {
	const data = req.body;

	if (!data) return res.status(400).send("Bad Request");

	try {
		fs.readFileSync("./src/store/cart.json");

		console.log(data);
	} catch(e) {
		return res.status(500).send("Server error: " + e);
	}
});

export default routeCart;
