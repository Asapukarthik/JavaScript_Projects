let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO=true;//player X,player O
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box clicked");
       if(turnO){//playerO turn
        box.innerText="O";
        turnO=false;
       }else{//playerX turn
        box.innerText="X";
        turnO=true;
       }
       box.disabled="true";

       checkWinner();
    });
})
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner= (winner) =>{
    msg.innerText=`Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(partten);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     // boxes[pattern[0]].innerText,
        //     // boxes[pattern[1]].innerText,
        //     // boxes[pattern[2]].innerText
        // );
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("winner",pos1val);
                showWinner(pos1val);

            }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
