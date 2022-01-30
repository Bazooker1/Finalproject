const tiles = document.querySelectorAll('.tile');
let array=[];
let score=0;

function WinCondition(){
    if (score==16){
        score=0;
        DrawField();
        alert('Братья-пилоты были бы благодарны Вам за открытый холодос!');
    }
}

function SwapField(){
    tiles.forEach(it=>{
            for (i=1;i<5;i++) {
                for (j = 1; j < 5; j++) {
                    if(array[i][j]==1)
                        document.getElementById(i+'.'+j).style.background=('#8B4513');
                    else
                        document.getElementById(i+'.'+j).style.background=('#BC8F8F');
                }
            }
        }
    )
    setTimeout(WinCondition, 100);
}

function DrawField() {
    score=0;
    array=[];
    for (i=1;i<5;i++){
        array[i]=[];
    }
    for (i=1;i<5;i++){
        for (j=1;j<5;j++){
            array[i][j]=Math.floor(Math.random() * 2);
            console.log(array[i],[j]);
            if(array[i][j]==1) {
                document.getElementById(i + '.' + j).style.background = ('#8B4513');
                score++;
            }
            else document.getElementById(i + '.' + j).style.background = ('#BC8F8F');
        }
    }
}

DrawField();

tiles.forEach(it=>{
    it.addEventListener('mousedown', () => {
        for (i=1;i<5;i++){
            if (array[i][it.id.charAt(2)]==0) {
                array[i][it.id.charAt(2)] = 1;
                score++;
            }
            else {
                array[i][it.id.charAt(2)] = 0;
                score--;
            }
        }
        for (j=1;j<5;j++){
            if (array[it.id.charAt(0)][j]==0) {
                array[it.id.charAt(0)][j] = 1;
                score++;
            }
            else {
                array[it.id.charAt(0)][j] = 0;
                score--;
            }
        }
        if(array[it.id.charAt(0)][it.id.charAt(2)]==0) {
            array[it.id.charAt(0)][it.id.charAt(2)] = 1;
            score++;
        }
        else{
            array[it.id.charAt(0)][it.id.charAt(2)]=0;
            score--;
        }
        SwapField();
    })
})


