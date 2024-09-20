let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","blue","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let h = document.querySelector(".rules");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("GAME BEGINS");
        started = true;

        levelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText =  `LEVEL ${level}`;
    ul.innerText = "";
    li.innerText = "";
    h.innerText = "";

    let randIdx = Math.floor(Math.random()*3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    // console.log(randIdx);
    // console.log(randClr);
    // console.log(randBtn);
    // console.log(randClr);

    gameSeq.push(randClr);
    console.log(gameSeq);
    gameflash(randBtn);
}

function check(idx){
    // console.log( "current Level:", level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your Score:<b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}