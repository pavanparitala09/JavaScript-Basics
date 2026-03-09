let ele = document.querySelector('h1')
let btn1 = document.querySelector("#yes")
let btn2 = document.querySelector("#no")

btn1.addEventListener('click',()=>{
    ele.textContent = "thanks for coming back"
})

btn2.addEventListener('click', ()=>{
    ele.textContent = "regrster now"
})
