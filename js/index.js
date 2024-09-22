document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInput = getInputFieldValueById('income-input');
    const softwareInput = getInputFieldValueById('software-input'); 
    const courseInput = getInputFieldValueById('course-input'); 
    const internetInput = getInputFieldValueById('internet-input'); 


    // so i set the input type number that no need to give validation
    if(isNaN(incomeInput)){
     return   document.getElementById('first-p').classList.remove('hidden')
    }
    if(isNaN(softwareInput)){
     return   document.getElementById('first-p').classList.remove('hidden')
    }
    if(isNaN(courseInput)){
     return   document.getElementById('first-p').classList.remove('hidden')
    }
    if(isNaN(internetInput)){
     return   document.getElementById('first-p').classList.remove('hidden')
    }
    
    
    // console.log(incomeInput, softwareInput, courseInput, internetInput);
    const totalCost = softwareInput + courseInput + internetInput;
    const stayMoney = incomeInput - totalCost;
    document.getElementById('total-expenses').innerText = totalCost.toFixed(2);
    document.getElementById('Balance').innerText = stayMoney.toFixed(2);

    // class list remove
    document.getElementById('result').classList.remove('hidden')
})

document.getElementById('savings-btn').addEventListener('click', function(){
    const incomeInput = getInputFieldValueById('income-input');
    const softwareInput = getInputFieldValueById('software-input'); 
    const courseInput = getInputFieldValueById('course-input'); 
    const internetInput = getInputFieldValueById('internet-input'); 
    const savingsInput = getInputFieldValueById('savings-input')
if(isNaN(savingsInput)){
    return document.getElementById('savings-input').classList.remove('hidden')
}
    const totalCost = softwareInput + courseInput + internetInput;
    const stayMoney = incomeInput - totalCost;

    const saveMoney = (stayMoney * savingsInput ) / 100;
    const remainBalance = stayMoney - saveMoney;
    document.getElementById('savings-amount').innerText = saveMoney.toFixed(2);
    document.getElementById('Remaining-balance').innerText = remainBalance.toFixed(2);
 // class list remove
    document.getElementById('result').classList.remove('hidden')
    
})

