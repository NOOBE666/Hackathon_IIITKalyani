var openBtn = document.querySelector('.open_form')
var main = document.querySelector('.main')
var btns = document.querySelectorAll('.btn button')
var signInBtn = document.querySelector('.sign_in')
var signUpBtn = document.querySelector('.sign_up')
var signInForm = document.querySelector('.sign_in_form')
var signUpForm = document.querySelector('.sign_up_form')
var inputField = document.querySelectorAll('input')
var passwordInput = document.querySelector('.pass')
var eyeBtn = document.querySelector('.eye')
var passwordInput1 = document.querySelector('.pass1')
var eyeBtn1 = document.querySelector('.eye1')
var cross = document.querySelector('.cross')

openBtn.addEventListener('mouseover', (event)=>{
    const x = (event.pageX - openBtn.offsetLeft)
    const y = (event.pageY - openBtn.offsetTop)

    openBtn.style.setProperty("--xPos", x + "px")
    openBtn.style.setProperty("--yPos", y + "px")
})

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        btns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        if(btn.innerText == "Sign In"){
            signUpForm.style.display = 'none'
            signInForm.style.display = 'block'
        }

        else{
            signInForm.style.display = 'none'
            signUpForm.style.display = 'block'
        }
    })
})

passwordInput.addEventListener('focus', ()=>{
    if(passwordInput.value.trim() != ''){
        eyeBtn.style.display = "block"
    }

    passwordInput.onkeyup = ()=>{
        let val = passwordInput.value
        if(val.trim() != ''){
            eyeBtn.style.display = "block"
        }
        else{
            eyeBtn.style.display = "none"
            passwordInput.setAttribute('type','password')
            eyeBtn.classList.remove("fa-eye-slash")
            eyeBtn.classList.add('fa-eye')
        }
    }
})

eyeBtn.addEventListener('click', ()=>{
    if(passwordInput.type == "password"){
        passwordInput.setAttribute('type', 'text')
        eyeBtn.classList.remove("fa-eye")
        eyeBtn.classList.add('fa-eye-slash')
    }

    else{
        passwordInput.setAttribute('type', 'password')
        eyeBtn.classList.add("fa-eye")
        eyeBtn.classList.remove('fa-eye-slash')
    }
})


passwordInput1.addEventListener('focus', ()=>{
    if(passwordInput1.value.trim() != ''){
        eyeBtn1.style.display = "block"
    }

    passwordInput1.onkeyup = ()=>{
        let val = passwordInput1.value
        if(val.trim() != ''){
            eyeBtn1.style.display = "block"
        }
        else{
            eyeBtn1.style.display = "none"
            passwordInput1.setAttribute('type','password')
            eyeBtn1.classList.remove("fa-eye-slash")
            eyeBtn1.classList.add('fa-eye')
        }
    }
})

eyeBtn1.addEventListener('click', ()=>{
    if(passwordInput1.type == "password"){
        passwordInput1.setAttribute('type', 'text')
        eyeBtn1.classList.remove("fa-eye")
        eyeBtn1.classList.add('fa-eye-slash')
    }

    else{
        passwordInput1.setAttribute('type', 'password')
        eyeBtn1.classList.add("fa-eye")
        eyeBtn1.classList.remove('fa-eye-slash')
    }
})

openBtn.addEventListener('click', ()=>{
    main.classList.add('active')
    eyeBtn.style.display = "none"
    eyeBtn1.style.display = "none"
})

cross.addEventListener('click', ()=>{
    main.classList.remove('active')
    signInBtn.classList.add('active')
    signUpBtn.classList.remove('active')
    signInForm.style.display = 'block'
    signUpForm.style.display = 'none'

    inputField.forEach(inputVal =>{
        inputVal.value = ""
    })

    eyeBtn.style.display = 'none'
    passwordInput.setAttribute('type','password')
    eyeBtn.classList.add('fa-eye')
    eyeBtn.classList.remove("fa-eye-slash")

    eyeBtn1.style.display = 'none'
    passwordInput1.setAttribute('type','password')
    eyeBtn1.classList.add('fa-eye')
    eyeBtn1.classList.remove("fa-eye-slash")
})