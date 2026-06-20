const express = require("express");
const app = express();
const quotes = [
	"Success comes from consistency.",
	"Small progress is still progress.",
	"Discipline beats motivation.",
	"Keep learning everyday.",
	"Action creates results.",
];
app.get("/", (req, res) => {
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	res.json({
		quote: randomQuote,
	});
});
app.listen(3000, () => {
	console.log("Server running on port 3000");
});
