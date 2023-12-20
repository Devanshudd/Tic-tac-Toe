let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector('#msg');
let count = 0 ;

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame =() => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO)
        {
            box.innerHTML = "0";
            turnO = false;
            count++;
        }
        else{
            box.innerHTML= "X";
            turnO = true;
            count++;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledboxes = () => {
    for(let box of boxes)
    {
        box.disabled =true;
    }
}

const enabledboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congrations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const displaymsg = () => {
    msg.innerText = `Match Is Draw`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
const checkwinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    if(count == 9)
    {
        displaymsg();
    }
    if(pos1Val!="" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val==pos2Val && pos2Val==pos3Val)
        {
            showwinner(pos1Val);
        }
    }
    }
}

newbtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);