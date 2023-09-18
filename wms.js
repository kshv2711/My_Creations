 const Password=document.getElementById('password')
 const Massage=document.getElementById('massage')
 const Strength=document.getElementById('strength')
 const button=document.getElementById('button')
 const EyeIcon=document.getElementById('eyeIcon')

 Password.addEventListener('input',()=>{



    

    if(Password.value.length>0){
        Massage.style.display="block"
        button.onclick=function(){
            if(Password.type=="password"){
                Password.type="text"
                EyeIcon.src="eye-open.png";
        
            }
            else{
                Password.type="password"
                EyeIcon.src="eye-close.png";
            }
         }
    }
    else{
        Massage.style.display="none"
    }
    if(Password.value.length<4){
        Strength.innerHTML="weak"
        Massage.style.color='red';
        Password.style.borderColor="red"


    } else  if(Password.value.length>=4 && Password.value.length<8){
        Strength.innerHTML="Medium"
        Massage.style.color='yellow';
        Password.style.borderColor="yellow"
    } else  if(Password.value.length>=8 && Password.value.length<16 ){
        Strength.innerHTML="Strong"
        Massage.style.color='green';
        Password.style.borderColor="green"
    } else if(Password.value.length>16){
        Strength.innerHTML="Not be more than 16 character try again"
        Massage.style.color='red';
        Password.style.borderColor="red"
    }
        
    
 })
 