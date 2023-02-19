document.getElementById("btn-submit").addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    //console.log(email);
    const passField=document.getElementById('user-pass');
    const pass=passField.value;
   // console.log(pass);
   if(email==='bbank@gmail.com' && pass==="secret"){
        window.location.href='bank.html';

   }
   else{
    alert('Invalid User');
   }

})