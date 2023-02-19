document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    const depositTotalElement=document.getElementById('deposit-total');
   
    const PreviousDepositTotalString=depositTotalElement.innerText;
    const PreviousDepositTotal=parseFloat(PreviousDepositTotalString);
    const currentDepositTotal=PreviousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    // get balance total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    //calculate current total
    const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText=currentBalanceTotal;


    depositField.value='';


})