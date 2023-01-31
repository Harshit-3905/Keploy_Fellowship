let a = document.getElementById("btn")
let setup = document.querySelector(".setup")
let punchline = document.querySelector(".punchline")


a.onclick=function(){
    fetch(`http://localhost:3000/list_jokes`)
    .then((response) => response.json())
    .then((data) => {
        const random = Math.floor(Math.random()*9);
        const setupcontent = data[random].joke;
        // console.log(setupcontent);
        // console.log(punchlinecontent);
        setup.innerHTML= setupcontent;
    })
}