let options = ["", " + ", " - ", " * ", " / ", " = ", " ** ", " % ", " ^ ", "<<"];
// define UI variables

let calc = document.querySelector("#Calculator");
let output = document.querySelector("#output");

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

function calculateExpr(value){
    try{
        return Function(`return ${value}`)();
    } catch (e) {
        return "";
    }
}