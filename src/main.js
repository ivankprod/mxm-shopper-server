import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import routeCards from "#core/routes/cards.js";
import routeCart from "#core/routes/cart.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/cards", routeCards);
app.use("/cart", routeCart);

app.listen(8000, () => {
	console.log("Listening at localhost:8000");
});
