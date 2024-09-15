let currentplayer = "X";
let arr = Array(9).fill(null);

function checkwinner() {
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        alert(`Winner is ${currentplayer}`);
        resetGame();
        return;
    }
    
    if(!arr.some((e) => e === null)){
        alert(`Hey its Draw!!`);
        resetGame();
        return;
    }
}

function handleclick(el) {
    const id = Number(el.id);
    if(arr[id] !== null) return;
    arr[id] = currentplayer;
    el.innerText = currentplayer;  // Fixed 'innertext' to 'innerText'
    checkwinner();
    currentplayer = currentplayer === "X" ? "O" : "X";
}

function resetGame() {
    arr.fill(null);
    const columns = document.querySelectorAll('.column');
    columns.forEach(col => col.innerText = '');
}
