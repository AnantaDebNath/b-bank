document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithDrawAmountString=withdrawField.value;
    const newWithDrawAmount=parseFloat(newWithDrawAmountString);
    

// withdrawbox
 const withdrawTotalElement=document.getElementById('withdraw-total');
 const previousWithdrawTotalString=withdrawTotalElement.innerText;
 const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
 console.log(previousWithdrawTotal);

//  calculate total withdraw amount;
 const currentWithdrawTotal=previousWithdrawTotal + newWithDrawAmount;
 withdrawTotalElement.innerText=currentWithdrawTotal;
 const balanceTotalElement=document.getElementById('balance-total');
 const previousBalanceTotalString=balanceTotalElement.innerText;
 const previousBalanceTotal=parseFloat(previousBalanceTotalString);
 console.log(previousBalanceTotal);
 const newBalanceTotal=previousBalanceTotal - newWithDrawAmount;
 balanceTotalElement.innerText=newBalanceTotal;

 
  withdrawField.value="";

})