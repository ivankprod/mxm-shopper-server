import os from "os";
import fs from "fs";
import express from "express";

export const routeCart = express.Router();

routeCart.get("/get", (_, res) => {
	try {
		const curCart = JSON.parse(fs.readFileSync("./src/store/cart.json"));

		return res.json(curCart);
	} catch (e) {
		return res.status(500).send("Server error: " + e);
	}
});

routeCart.post("/add", (req, res) => {
	const data = req.body;

	if (!data) return res.status(400).send("Bad Request");

	try {
		const curCart = JSON.parse(fs.readFileSync("./src/store/cart.json"));
		const finalCart = [...curCart, data];

		fs.writeFileSync(
			"./src/store/cart.json",
			JSON.stringify(finalCart, null, "	").replace(/\n/, os.EOL)
		);

		return res.send("Товар успешно добавлен в корзину");
	} catch (e) {
		return res.status(500).send("Server error: " + e);
	}
});

export default routeCart;
