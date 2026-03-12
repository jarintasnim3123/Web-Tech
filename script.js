function press(value) {
    document.getElementById("display").value += value;
}
function calculate() {
    const expr = document.getElementById("display").value;

    try {
        const result = eval(expr);
        document.getElementById("display").value = result;
    } 
    catch {
        alert("Invalid Input");
    }
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteOne(){
const current = document.getElementById("display").value;
document.getElementById("display").value = current.slice(0,-1);
}