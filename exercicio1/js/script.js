document.querySelector("#button").onclick = function (){
    let numResult = Number (document.querySelector("#num").value**2);
    document.querySelector("#numResult").value = numResult;
    return false;
}