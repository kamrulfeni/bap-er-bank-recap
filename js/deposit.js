
   
 document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount; 
    setTextElementValueById('deposit-total', newDepositTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

 })
    
    
 

//     /*
//      1.get  the element by id 
//      2.get the value from the element 
//      3.convert string value to a number
//      */

// }