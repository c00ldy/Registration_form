let errors = document.querySelectorAll('input')

errors.forEach((e) => {
    e.addEventListener('blur', (event) => {

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
console.log(event.target.name)

        if (event.target.value == "") {
           document.querySelector('.error').innerHTML = "enter valid details"
            console.log("done")
            return false;
        }
        else if(event.target.value != ""){
            console.log(event.target.type)
            event.target.classList.remove('isinvalid')
            if(event.target.type == "email"){
                if (!emailRegex.test(event.target.value)) {
                    document.querySelector('.eerror').innerHTML = "please enter valid email"
                    return false;
                }
                else{
                    document.querySelector('.eerror').innerHTML = ""
                }
            }
        }
        else{
            event.target.classList.remove('isinvalid')
        }
        return true;

    })
})