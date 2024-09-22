document.getElementById('Assistant-first').addEventListener('click', function(){
    getSectionDivById('expense-div')

    document.getElementById('Assistant-first').classList.add('bg-white', 'bg-gradient-to-r','from-blue-500','to-purple-500','text-white')
 

    document.getElementById('History-first').classList.remove('bg-white', 'bg-gradient-to-r','from-blue-500','to-purple-500','text-white');
    // appendChild-div
    document.getElementById('history-div').classList.add('hidden');

});

document.getElementById('History-first').addEventListener('click', function(){

    getSectionDivById('result')
   
// appendChild-div
    document.getElementById('history-div').classList.remove('hidden');

    document.getElementById('History-first').classList.add('bg-white', 'bg-gradient-to-r','from-blue-500','to-purple-500','text-white');

    document.getElementById('Assistant-first').classList.remove('text-white','bg-white', 'bg-gradient-to-r','from-blue-500','to-purple-500')

    // appending 
    const incomeInput = getInputFieldValueById('income-input');
    const softwareInput = getInputFieldValueById('software-input'); 
    const courseInput = getInputFieldValueById('course-input'); 
    const internetInput = getInputFieldValueById('internet-input'); 
    const savingsInput = getInputFieldValueById('savings-input')

    const totalCost = softwareInput + courseInput + internetInput;
    const stayMoney = incomeInput - totalCost;

    const saveMoney = (stayMoney * savingsInput ) / 100;
    const remainBalance = stayMoney - saveMoney;

   const  div = document.createElement('div');
   div.classList = "bg-white p-3 rounded-md border-l-2 border-indigo-500";
   div.innerHTML = `
         <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
         <p class="text-xs text-gray-500">income: ${incomeInput.toFixed(2)}</p>
         <p class="text-xs text-gray-500">expenses: ${totalCost.toFixed(2)}</p>
        <p class="text-xs text-gray-500">balance: ${remainBalance.toFixed(2)}</p>
   `;
    document.getElementById('div-container').appendChild(div)


 
})