let music = new Audio("music.mp3")
let audioTurn = new Audio('ting.mp3')
let turn = 'X'
let isOver = false;
//function change turn
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'

}
//function to win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.map(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " " + 'won';
             isOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";

        
            // music.play()
        }
      



    })


    
//     for (let i = 0; i < wins.length; i++) {
// if ((boxTexts[i][0].innerText === boxTexts[i][1].innerText) && (boxTexts[i][2].innerText === boxTexts[i][1].innerText) && (boxTexts[i][0].innerText !== "")){
// document.querySelector('.info').innerText = boxTexts[i][0].innerText + " " + 'won';
// isOver = true;
//  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
//     } 
//     }    
    

}
//Game logic
// music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            // console.log("turn" + turn)
            turn = changeTurn();
            // console.log("c" + turn)
            audioTurn.play();
            checkWin()
            if (!isOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for   ' + turn;
            }
        }
    })
})
//Restart button
let Restartbtn = document.getElementById('restart')
restart.addEventListener('click', () => {
    let boxxText = document.querySelectorAll('.boxText')
    Array.from(boxxText).forEach(element => {
        element.innerText = ''
    })
    turn = 'X'
    isOver = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    music.pause();
})

















// calculater
function num(val) {
    let result = document.getElementById("screen")
    result.value += val;
}
function clearinput() {
    let result = document.getElementById("screen")
    result.value = '';
}
function result() {
    let result = document.getElementById("screen")
    result.value = eval(result.value);
}
function reset() {
    let result = document.getElementById("screen")
    let remove = result.value;
    remove = remove.slice(0, -1)
    result.value = remove;
}