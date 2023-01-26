let a = document.getElementById("btn")
let setup = document.querySelector(".setup")
let punchline = document.querySelector(".punchline")


a.onclick=function(){
    fetch(`https://official-joke-api.appspot.com/jokes/programming/random`)
    .then((response) => response.json())
    .then((data) => {
        const setupcontent = data[0].setup;
        const punchlinecontent = data[0].punchline;
        // console.log(setupcontent);
        // console.log(punchlinecontent);
        setup.innerHTML= setupcontent;
        punchline.innerHTML = punchlinecontent;
    })
}