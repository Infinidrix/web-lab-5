let options = ["", " + ", " - ", " * ", " / ", " = ", " ^ ", " % ", ".", "^ 2"];
let opsStack = []
let numStack = [];
// define UI variables

let calc = document.querySelector("#Calculator");
let output = document.querySelector("#output");

function add(num1, num2){
    return num1 + num2;
}
function subs(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    if (num2 === 0){
        throw EvalError("Can't have 0 as divisor");
    }
    return num1 / num2;
}
function pow(num1, num2){
    return num1 ** num2
}
function mod(num1, num2){
    return num1 % num2;
}

calc.addEventListener('click', (e) => {
    let src = e.target.id;

    let [type, value] = src.split("-");
    if (!value) return;
    if (type === "ops" && value === "5") {
        output.value = calculateExpr(output.value);
    } else if (type === "clr") {
        output.value = '';
        e.preventDefault();
    } else {
        output.value = output.value + ((type === "num") ? value : options[parseInt(value)]);
    }
})

function calculateExpr(expr){
    try{
        if (expr.includes("+")){
            var loc = expr.indexOf("+"); 
            return add(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));
        } else if (expr.includes("-")){
            var loc = expr.indexOf("-"); 
            return subs(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));
        } else if (expr.includes("*")){
            var loc = expr.indexOf("*"); 
            return mult(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));
        } else if (expr.includes("/")){
            var loc = expr.indexOf("/"); 
            return div(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));
        } else if (expr.includes("^")){
            var loc = expr.indexOf("^");
            return pow(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));
        } else if (expr.includes("%")){
            var loc = expr.indexOf("%");
            return mod(calculateExpr(expr.slice(0, loc)), calculateExpr(expr.slice(loc + 1, expr.length)));  
        } 
        else {
            return parseFloat(expr)
        }
    } catch (e) {
        console.log(e);
        return "";
    }
}