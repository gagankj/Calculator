
//input
const input=document.getElementById("input")

//clear
const clear=document.getElementById("clear")

//back
const back=document.getElementById("back")

//button
const button=document.getElementsByClassName("button")

//! OPERATORS
//addition
const add=document.getElementById("add")
// division
const divide=document.getElementById("divide")
//multiply
const multiply=document.getElementById("multiply")
// minus
const minus=document.getElementById("minus")

//EQUAL
const equal=document.getElementById("equal"
    
)

// clear button
clear.addEventListener("click",function(){
    input.innerText=""
})

//back button
back.addEventListener("click",function(){
    const input2=input.innerText;
    const number=input2.split("");
    number.pop();
    const number2=number.join("");
    input.innerText=number2;
    first=number2
    console.log(first)
})

let first;
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function(){
        first=input.innerText+=button[i].innerText
        
    })
    
}

//equal button
equal.addEventListener("click",function(){
    let result=eval(first);
    if(result%1!=0){
        let newResult=result.toFixed(6);
        input.innerText=newResult;
    }
    else{
        input.innerText=result;
    }
    console.log(result)
})



