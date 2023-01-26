let a = document.getElementById("btn")
let setup = document.querySelector(".setup")
let punchline = document.querySelector(".punchline")


a.onclick=function(){
    fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then((response) => response.json())
    .then((data) => {
        const setupcontent = data.setup;
        const punchlinecontent = data.punchline;
        // console.log(setupcontent);
        // console.log(punchlinecontent);
        setup.innerHTML= setupcontent;
        punchline.innerHTML = punchlinecontent;
    })
}