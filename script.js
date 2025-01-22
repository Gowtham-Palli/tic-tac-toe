let boxes = document.querySelectorAll(".box")
let msg=document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn")
let resetbtn = document.querySelector("#reset-btn")
let msgcontainer = document.querySelector(".msg-container")

let patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnO = true

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText='O'
            turnO=false;
        }else{
            box.innerText='X'
            turnO=true;
        }
        box.disabled = true

        if(!checkWinner()){
            if(checkForDraw()){
                msg.innerText=`draw`
                msgcontainer.classList.remove("hide")
            }
        }
    })
})

function checkForDraw() { 
    const cells = document.querySelectorAll('.box'); 
    let isDraw = true;
    cells.forEach(cell =>{ 
        if (cell.textContent === '') {
            isDraw = false; } });
    return isDraw
}
    
const checkWinner= ()=>{
    for(let pattern of patterns){
        let boxVAL1 = boxes[pattern[0]].innerText
        let boxVAL2 = boxes[pattern[1]].innerText
        let boxVAL3 = boxes[pattern[2]].innerText

        if(boxVAL1!='' && boxVAL2!='' && boxVAL3!=''){
            if(boxVAL1===boxVAL2 && boxVAL2===boxVAL3){
                msg.innerText=`Congratulations, winner is ${boxVAL1}`
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                msgcontainer.classList.remove("hide")
                return true
            }
        }
    }

}

const resetGame = ()=>{
    turnO=true;
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText=""
    })
    msgcontainer.classList.add("hide")
}

newbtn.addEventListener('click',resetGame)
resetbtn.addEventListener('click',resetGame)





