let boxes = document.querySelectorAll(".box");
let restartbtn = document.querySelector(".restart");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winningPatern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

let disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let checkWinner = () => {
    for (let pattern of winningPatern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log(`Winner is ${pos1Val}`);
                disable();
                msg.innerHTML = `Winner is ${pos1Val}`;
                msgContainer.classList.remove("hide");
            
            }
        }

    }
}