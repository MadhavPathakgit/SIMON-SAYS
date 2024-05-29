let gameSeq=[];
let userSeq=[];
let btns = ["yellow","red","green","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

 document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }

 });
 function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },600);

 }
 function levelUp(){
    userSeq = [];
    
    level++;
    h2.innerText = `level ${level}`;
    let randindex = Math.floor(Math.random()*3);
    let randColor = btns[randindex];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randindex);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq)

btnflash(randbtn);

 }
 function checkAns(idx){
    // console.log("current level:", level);
    if(userSeq[idx]=== gameSeq[idx]){
    if(userSeq.length== gameSeq.length){
       setTimeout( levelUp(),1000);
    }
    }else{

        h2.innerHTML= `game over! YOUR Score was <b>${level}</b><br> Press any key to Start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";

        },150);
    reset();
    }
 }

function btnPress(){
    // console.log("btn was pressed");
   let btn = this;
   btnflash(btn);
   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);

}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
 started = false;
   userSeq = []; 
gameSeq=[];

 level = 0;
}
