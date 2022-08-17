

var enteredNumber = '';
var resultSpace = '';
var operandCount = 0;
var operandSign = '';




function operation(operand){
    operandCount ++;
    switch(operand){
        case  'add':
            evalNumbers('+');
            break;
        case 'sub':
            evalNumbers('-');
            break;
        case 'mul':
            evalNumbers('*');
            break;
        case 'division':
            evalNumbers('/');
            break;
        case 'percentage':
            evalNumbers('%');
            break;
        case 'clear':
            clearNumbers();

        default:
            return 0;

    }
}

function clearNumbers(){
    enteredNumber.value = 0;
    resultSpace.innerText = 0;
}

function onNumberClick(num){
    enteredNumber = document.getElementById('enteredNum');
    enteredNumber.value = enteredNumber.value + num;
    
}

function evalNumbers(operand){
    operandSign = operand;
    if(enteredNumber.value){
         enteredNumber.value = enteredNumber.value + operand;
    } 
   
    if(operandCount > 1){
        result();
    }
}


function result(){
    resultSpace = document.getElementById('result-space');
    if(operandCount > 1){
    resultSpace.innerText = eval(enteredNumber.value.substring(0,enteredNumber.value.length-1));
    enteredNumber.value = eval(enteredNumber.value.substring(0,enteredNumber.value.length-1))+operandSign;
    operandCount = 1;
} else{
    resultSpace.innerText = eval(enteredNumber.value);
    enteredNumber.value = eval(enteredNumber.value);
    operandCount = 0;
    }
    
}