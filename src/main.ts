import { factory } from "./factory";

// DOM elements
const startAtControl = document.getElementById("start-at") as HTMLInputElement;
const stepControl = document.getElementById("step") as HTMLInputElement;
const countButton = document.querySelector(
  ".count_button"
) as HTMLButtonElement;
const currentCount = document.querySelector(
  ".current_count"
) as HTMLSpanElement;

// Function to update count based on factory function and reset counter
function updateCountAndResetCounter() {
  const startValue = Number(startAtControl.value);
  const stepValue = 0; // resetting the step value to '0' to ensure that, before clicking the counter button it should not add the step value during the reset.
  const result = factory(startValue, stepValue);
  currentCount.textContent = result().toString();
}

// Event listeners for start-at and step controls
[startAtControl, stepControl].forEach((control) => {
  control.addEventListener("input", updateCountAndResetCounter); // Use 'input' event for immediate update
});

// Event listener for count button
countButton.addEventListener("click", () => {
  const currentValue = Number(currentCount.textContent);
  const stepValue = Number(stepControl.value);
  const result = factory(currentValue, stepValue);
  currentCount.textContent = result().toString();
});
