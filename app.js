

let myBtn = document.getElementById("btn");
let myResult = (e) => {
    let myProg = document.getElementById("prog").value;
let myMath = document.getElementById("math").value;
let myComp = document.getElementById("comp").value;
let myEng = document.getElementById("eng").value;
let myPara = document.getElementById("para");
let inpBox = document.querySelector("#reset");
  
    if(myProg == "" || myMath == "" || myComp == "" || myEng == ""){
        myPara.innerHTML = "Please Fill all the Fields";
        myPara.style.color = "red";
       setTimeout(() => {
        myPara.innerHTML = "";
       }, 3000);
    }else{
       
        let myCount = parseFloat(myProg) + parseFloat(myMath) + parseFloat(myComp) + parseFloat(myEng);
   let myTotal = ((myCount*100)/400).toFixed(2);
        if(myTotal<=100 && myTotal >=80){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is A One.`;
            myPara.style.color = "#fff";
            inpBox.reset();
        }else if(myTotal>=70 && myTotal<80){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is A.`;
            myPara.style.color = "#fff"; 
        inpBox.reset();   }
            else if(myTotal>=60 && myTotal<70){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is B.`;
            myPara.style.color = "#fff";
        inpBox.reset();    }
            else if(myTotal>=50 && myTotal<60){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is C.`;
            myPara.style.color = "#fff";
        inpBox.reset();    }
            else if(myTotal>=40 && myTotal<50){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is D.`;
            myPara.style.color = "#fff";
        inpBox.reset();    }
            else if(myTotal<40){
            myPara.innerHTML = `Total Marks is 400. Your Obtain Marks is ${myCount}. Your Percentage is ${myTotal}. Your Grade is E.`;
            myPara.style.color = "crimson";
            inpBox.reset();
        }else{
            myPara.innerHTML = `Please Enter a Correct Number`;
            myPara.style.color = `crimson`;
        }
        // myProg = "";
        // myMath = "";
        // myComp = "";
        // myEng = "";
    }
    e.preventDefault();
}
myBtn.addEventListener("click",myResult);