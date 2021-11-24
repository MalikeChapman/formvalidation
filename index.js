
let toggleClass = function (){
    this.classList.add("touched");
}

document.querySelectorAll("input")
.forEach(e =>{
    e.addEventListener('blur', toggleClass, false);
    e.addEventListener('keydown', toggleClass, false);
    e.addEventListener('invalid', invalidCheck);
});


function invalidCheck(){
    console.log(this.type);
    switch(this.id){
        case "emailid":
            this.setCustomValidity('Please enter a valid email!');
            break;
        
        case "passwordid":
            this.setCustomValidity('Password is not valid!');
            break;

        case "zipcodeid":
            this.setCustomValidity('The text you entered is not valid!');
            break;

        case "countryid":
            this.setCustomValidity('This cannot be blank!');
            break;

        case "confirmpasswordid":
            this.setCustomValidity('This cannot be empty');
            break;
    }
}

