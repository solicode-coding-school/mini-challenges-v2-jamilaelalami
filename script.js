const incomeList = document.querySelector('.income ul');
const expensesList = document.querySelector('.expenses ul');
const earnedh5 = document.getElementById('earned-amount'); 
const available4 = document.getElementById('available-amount'); 
const spentSpan = document.getElementById('spent-amount'); 

const earned = 0;
const spent = 0;
const available = 0;

const addIncomeButton = document.getElementById('add-income-btn');
const addExpenseButton = document.getElementById('add-expense-btn');
const addIncomeForm = document.getElementById('add-income-form');
const addExpenseForm = document.getElementById('add-expense-form');

addIncomeButton.addEventListener('click', function() {
    addIncomeForm.style.display = 'block';
});

addExpenseButton.addEventListener('click', function() {
    addExpenseForm.style.display = 'block';
});


function addIncome() {
    const incomeInput = document.getElementById('income-input'); 
    const incomeValue = parseFloat(incomeInput.value);

    if (!isNaN(incomeValue) && incomeValue > 0) {
        earned += incomeValue;
        earnedh5.textContent = earned.toFixed(2); 
        available += incomeValue; 
        available4.textContent = available.toFixed(2); 


        const li = document.createElement('li');
        li.textContent = Revenu: ${incomeValue.toFixed(2)};
        incomeList.appendChild(li);

        incomeInput.value = ''; 
        addIncomeForm.style.display = 'none'; 
    }
}   