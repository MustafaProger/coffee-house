import React, { useState } from "react";

const coffeeList = [
	{ id: 1, name: "Colombian Classic", price: "12.99" },
	{ id: 2, name: "Ethiopian Delight", price: "14.99" },
	{ id: 3, name: "Brazilian Roast", price: "10.99" },
];

function CoffeeRoulette() {
	const [selectedCoffee, setSelectedCoffee] = useState(null);

	const handleRandomPick = () => {
		const randomCoffee =
			coffeeList[Math.floor(Math.random() * coffeeList.length)];
		setSelectedCoffee(randomCoffee);
	};

	return (
		<div>
			<h2>For your pleasure</h2>
			<p>Can't decide? Let us surprise you with a random pick!</p>
			<button onClick={handleRandomPick}>🎲 Surprise me!</button>
			{selectedCoffee && (
				<div>
					<h3>{selectedCoffee.name}</h3>
					<p>Price: ${selectedCoffee.price}</p>
				</div>
			)}
		</div>
	);
}

export default CoffeeRoulette;
