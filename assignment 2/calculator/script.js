let result = document.getElementById("inputext");
let calculate=(Number)=>{
    result.value += Number;
}

let Result = ()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert('enter the valid input')
    }
}

function clr(){
    result.value = "";
}

function del(){
    result.value=result.value.slice(0, -1)
}