const completedLabels = document.querySelectorAll("span");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const index = button.id.slice(-1);
		incrementLabel(index);
	});
});

function incrementLabel(index) {
	const count = +completedLabels[index].textContent;
	completedLabels[index].textContent = count + 1;
}
