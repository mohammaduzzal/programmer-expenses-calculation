// input value
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// text value 
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getSectionDivById(id){
    document.getElementById('expense-div').classList.add('hidden')
    document.getElementById('result').classList.add('hidden')

    // remove toggle
    document.getElementById(id).classList.remove('hidden')
}
