const input = document.getElementById('input');
const BlockTime = document.querySelector('.time');
let interval;

BlockTime.innerHTML = 0;
input.value = 0;

document.getElementById('start').addEventListener('click', () => {
    
    if(input.value < 0) {
        input.value = 0;
        BlockTime.innerHTML = 0;
    }
    
    BlockTime.innerHTML = input.value;
    clearInterval(interval);
    interval = setInterval(substructTime, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    input.value = 0;
    BlockTime.innerHTML = 0;
})

function substructTime() {
    if(BlockTime.innerHTML > 0) {
        BlockTime.innerHTML --;
        input.value --;

        if(input.value < 0 || BlockTime.innerHTML == 0) {
            input.value = 0;
            BlockTime.innerHTML = 0;

            if(BlockTime.innerHTML == 0) {
                alert("TIME IS OVER!");
            }
        }
    }
    else {
        clearInterval(interval);
    }
    
}