const secondsBetweenSets = 60;

const timer = document.querySelector("#timer");
const completedLabels = document.querySelectorAll("span");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const index = button.id.slice(-1);
		incrementLabel(index);

		setButtonsEnabled(false);

		for (let second = secondsBetweenSets; second >= 0; second--) {
			const delay = (secondsBetweenSets - second) * 1000;
			setTimeout(() => {
				timer.textContent = second;
			}, delay);
		}

		setTimeout(() => {
			setButtonsEnabled(true);
		}, secondsBetweenSets * 1000);
	});
});

function setButtonsEnabled(enabled) {
	buttons.forEach((button) => {
		button.disabled = !enabled;
	});
}

function incrementLabel(index) {
	const count = +completedLabels[index].textContent;
	completedLabels[index].textContent = count + 1;
}
