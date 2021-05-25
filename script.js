function add(x, y) {
    return (x+y);
}

function subtract(x, y){
    return (x-y);
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

function operate(operator, x, y) {
    if(operator === "+"){
        return add(x, y);
    }
    else if(operator === "-"){
        return subtract(x, y);
    }
    else if(operator === "*"){
        return multiply(x, y);
    }
    else if(operator === "/"){
        return divide(x, y);
    }
}


let numbers = document.getElementsByClassName("all");
let display = document.getElementById("display");
let operator = "";
let index = 0;
let ans = "";
let myFunction = function() {
    let attribute = this.getAttribute("name");
    if(attribute == "+" || attribute == "-" || attribute == "*" || attribute == "/"){
        operator = attribute;
        index = ans.length;
    }
    if((ans == "" || ans.slice(-1) == "+" || ans.slice(-1) == "-" || ans.slice(-1) == "*" || ans.slice(-1) == "/") && (attribute == "+" || attribute == "-" || attribute == "*" || attribute == "/")){
        display.textContent = ans;
    }
    else{
        ans += attribute;
        display.textContent = ans;
    }
    
};

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', myFunction);
}

let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    ans = "";
});

let del = document.getElementById("delete");
del.addEventListener("click", () => {
    ans = ans.slice(0, -1);
    display.textContent = ans;
});

let calculate = document.getElementById("equals");
calculate.addEventListener("click", () => {
    let result = operate(operator, parseInt(ans.slice(0, index)), parseInt(ans.slice(index+1)));
    ans = "";
    display.textContent = result;
});