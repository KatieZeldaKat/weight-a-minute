const secondsBetweenSets = 60;

const timer = document.querySelector("#timer");
const completedLabels = document.querySelectorAll("span");
const buttons = document.querySelectorAll(".exercises button");

// Send popup for notifications if the user hasn't made a selection
if (Notification.permission === "default") {
	const popup = document.querySelector("#popup");
	popup.classList = "";

	document.querySelector("#notifications").addEventListener("click", () => {
		Notification.requestPermission((_) => {
			popup.classList = "hidden";
		});
	});
}

// Make each button start the timer when pressed
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

			if (Notification.permission === "granted") {
				new Notification("Rest over, time for the next set!");
			}
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
