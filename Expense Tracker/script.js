// script.js
// This script handles adding income and expenses, and updates the totals automatically.

// Get references to input fields, buttons, and total display elements
const incomeInput = document.getElementById("income-input");
const addIncomeBtn = document.getElementById("add-income-btn");
const expenseInput = document.getElementById("expense-input");
const addExpenseBtn = document.getElementById("add-expense-btn");
const totalIncomeDisplay = document.getElementById("total-income");
const totalExpenseDisplay = document.getElementById("total-expense");
const netTotalDisplay = document.getElementById("net-total");

// Initialize totals
let totalIncome = 0;
let totalExpense = 0;

// Function to update the displayed totals
function updateTotals() {
  totalIncomeDisplay.textContent = totalIncome.toFixed(2);
  totalExpenseDisplay.textContent = totalExpense.toFixed(2);
  netTotalDisplay.textContent = (totalIncome - totalExpense).toFixed(2);
}

// Add event listener for Add Income button
addIncomeBtn.addEventListener("click", function () {
  // Get the value from the income input field
  const value = parseFloat(incomeInput.value);
  if (!isNaN(value) && value > 0) {
    totalIncome += value; // Add to total income
    updateTotals(); // Update the display
    incomeInput.value = ""; // Clear input field
  }
});

// Add event listener for Add Expense button
addExpenseBtn.addEventListener("click", function () {
  // Get the value from the expense input field
  const value = parseFloat(expenseInput.value);
  if (!isNaN(value) && value > 0) {
    totalExpense += value; // Add to total expense
    updateTotals(); // Update the display
    expenseInput.value = ""; // Clear input field
  }
});

// Initial display
updateTotals();

// --- Explanation ---
// 1. We select all necessary DOM elements by their IDs.
// 2. We keep track of total income and expenses with variables.
// 3. When a button is clicked, we add the input value to the total and update the display.
// 4. The net total (income - expenses) is also shown.
// 5. Input fields are cleared after each addition.
