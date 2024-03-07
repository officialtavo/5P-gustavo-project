let button = document.querySelector("button");
let letterGrade = document.querySelector(".letter-grade");
let result = document.querySelector(".result");
button.onclick = function() {
    let days = document.querySelector(".attendance").value;
    let mood = document.querySelector(".feelings").value;
    if (days > 3 && mood === "nice") {
        result.innerHTML = "You are an A student";
    } else if (days > 3 && mood === "rude") {
        result.innerHTML = "You are a B student";
    } else if (days < 3 && mood === "nice") {
        result.innerHTML = "You are a C student";
    } else if (days < 3 && mood === "rude") {
        result.innerHTML = "You are an F student";
    }
    
    

};