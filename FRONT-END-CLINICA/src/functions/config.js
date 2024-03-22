export const url = "https://localhost:7069/";

export const formatData = (data) => {
	const dateParts = data.split("-");
	const year = parseInt(dateParts[0]);
	const month = parseInt(dateParts[1]);
	const day = parseInt(dateParts[2]);

	const date = new Date(year, month - 1, day); // month - 1 perché i mesi in JavaScript partono da 0

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return date.toLocaleDateString("it-IT", options);
};
