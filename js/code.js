setTimeout(()=>{
    let h1 = document.querySelector("#h1");
    h1.style.display = "block";
    h1.style.animation = "h1 2s forwards";
}, 1000);

setTimeout(()=>{
    let btn = document.querySelector("#boton");
    btn.style.display = "block";
    btn.style.animation = "h1 2s forwards";
}, 2000);


//validation

let btn = document.querySelector("#boton");
let btnclose = document.querySelector("#btn-close");
let user = document.querySelector("#phusuario");
let password = document.querySelector("#phcontraseña");
let message = document.querySelector(".validation");
let alert = document.querySelector("#p_message");
btn.addEventListener("click", (e)=>{
    e.preventDefault();

    if(user.value == ""){
        message.style.display = "flex";
        alert.textContent = "El campo usuario no puede estar vacio";
        return;
    }else if(password.value == ""){
        message.style.display = "flex";
        alert.textContent = "El campo contraseña no puede estar vacio";
        return;
    }
    
});

btnclose.addEventListener("click", ()=>{
    message.style.display = "none";
});