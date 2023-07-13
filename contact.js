const p = document.querySelector(".text_e");
const c = document.querySelector(".text_c");
const n = document.querySelector(".text_p");
const button = document.querySelector("button");

const name = document.querySelector(".name").addEventListener("change",(e) => {
    const regex = new RegExp(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/);
    const value = e.target.value;
    if(regex.test(value)){
        n.classList.add("hidden")
     }else {
        n.classList.remove("hidden");
    }
    submit();
});
const email = document.querySelector(".email").addEventListener("change", (e) => {
    const regex = new RegExp(/^[a-zA-Z]{2,}(\d+)?@[a-zA-Z]{5,7}\.(com|\ac\.ke)$/);
    const value = e.target.value;
    if(regex.test(value)){
        p.classList.add("hidden")
     }else {
        p.classList.remove("hidden");
    }
    submit();
    
})
const contact = document.querySelector(".contact").addEventListener("change", (e)=> {
    const regex = new RegExp(/^\d{10}$/);
    const value = e.target.value;
    if(regex.test(value)){
        c.classList.add("hidden")
     }else {
        c.classList.remove("hidden");
    }
    submit();
})

function submit(){
    if(p.classList.contains("hidden") && n.classList.contains("hidden") && c.classList.contains("hidden")){
        button.disabled = false;
    }else button.disabled = true;
}
