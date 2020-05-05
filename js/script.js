const username = document.querySelector('input[name=username]');
const email = document.querySelector('input[name=email]')
const password = document.querySelector('input[name=password]');
const button = document.querySelector('input[name=button]');



button.addEventListener('click', function(){
    // for username
    let error = ['username', 'password', 'email'];
    if( username.value == '' ){
        let usr = document.querySelector('.usr');
        usr.classList.add('error');
        usr.innerHTML='<p>*Please enter a '+ error[0] +'*</p>';
    }
    if( email.value == '' ){
        let email = document.querySelector('.email');
        email.classList.add('error');
        email.innerHTML='<p>*Invalid '+ error[2] +' adress*</p>';
    }
    if( password.value == '' ){
        let pw = document.querySelector('.pw');
        pw.classList.add('error');
        pw.innerHTML='<p>*Invalid '+ error[1] +' adress*</p>';
    }
});