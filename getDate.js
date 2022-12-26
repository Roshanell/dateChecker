function getFullDate() {
	const d = new Date();
	const day = d.getDate();
	const year = d.getFullYear();
	// const day = getDay();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	switch (d.getMonth() + 1) {
		case 1:
			return `${months[0]} ${day}, ${year}`;

		case 2:
			return `${months[1]} ${day}, ${year}`;

		case 3:
			return `${months[2]} ${day}, ${year}`;

		case 4:
			return `${months[3]} ${day}, ${year}`;

		case 5:
			return `${months[4]} ${day}, ${year}`;

		case 6:
			return `${months[5]} ${day}, ${year}`;

		case 7:
			return `${months[6]} ${day}, ${year}`;
		case 8:
			return `${months[7]} ${day}, ${year}`;
		case 9:
			return `${months[8]} ${day}, ${year}`;

		case 10:
			return `${months[9]} ${day}, ${year}`;

		case 11:
			return `${months[10]} ${day}, ${year}`;

		case 12:
			return `${months[11]} ${day}, ${year}`;

		default:
			return `Please enter a valid numerical month value`;
	}
}

let currentFullDate = getFullDate();
document.querySelector("#date").innerText = getFullDate();
