import { factory } from "./factory";

// DOM elements
const startAtControl: HTMLInputElement = document.getElementById(
  "start-at"
) as HTMLInputElement;
const stepControl: HTMLInputElement = document.getElementById(
  "step"
) as HTMLInputElement;
const countButton: HTMLButtonElement = document.querySelector(
  ".count_button"
) as HTMLButtonElement;
const currentCount: HTMLSpanElement = document.querySelector(
  ".current_count"
) as HTMLSpanElement;

// Function to update count based on factory function and reset counter
function updateCountAndResetCounter(start: number, step: number): void {
  try {
    const result = factory(start, step);
    currentCount.textContent = result().toString();
  } catch (error) {
    console.error("Error:", (error as Error).message); // Assert error as Error type
  }
}

// Event listeners for start-at and step controls
[startAtControl, stepControl].forEach((control) => {
  control.addEventListener("input", () => {
    const startValue = Number(startAtControl.value);
    const stepValue = 0; // resetting the step value to '0' to ensure that, before clicking the counter button it should not add the step value during the reset.
    updateCountAndResetCounter(startValue, stepValue);
  });
});

// Event listener for count button
countButton.addEventListener("click", () => {
  const currentValue = Number(currentCount.textContent);
  const stepValue = Number(stepControl.value);
  const result = factory(currentValue, stepValue);
  currentCount.textContent = result().toString();
});
