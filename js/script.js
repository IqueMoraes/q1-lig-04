//Variáveis
const mainContainer = document.getElementById('container');
let img = ['./img/knight.png','./img/dragao.png','./img/caipirina.jpg', './img/cervejinha.jpg'];
//Variáveis

//Áudio
const sword = new Audio();
sword.src = './audio/sword.mp3';
sword.volume = 0.40;

const dragon = new Audio();
dragon.src = './audio/dragonroar.mp3';
dragon.volume = 0.60;
//Áudio

//Background Audio Button
const play = document.querySelector('button');
const pause = document.getElementById('pause');

play.addEventListener('click', () =>{
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.volume = 0.30;
    backgroundAudio.play();
});

pause.addEventListener('click', () =>{
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.pause();
});
//Background Audio Button

//Layout
const layout = [
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
];

let layoutGuides = [... layout];
//Layout

//Funções 


//-----------CONDIÇÃO DE VITORIA


function horizontal(x){
    let string = "PPPP"
    if(x !== true){
        string = "EEEE"
    }
    for(let i=0; i < layoutGuides.length ; i++){
        if(layoutGuides[i].indexOf(`${string}`) >= 0){
            return true
        }
    }

    return false

}

function vertical(x,numero){
    let arr = layoutGuides.map(index => {
        return index[numero]
        }).join('')
    
        let string ="PPPP"
        if(x !== true){
         string = "EEEE"
        }
        
        if(arr.indexOf(`${string}`) >= 0){
            return true
        }else{
            return false
        }
}



function diagonals(x){
    let string = "PPPP"
    if(x !== true){
        string = "EEEE"
    }
    let arr = increasingDiagonal().concat(decreasingDiagonal())
    for(let i=0; i < 12 ; i++){
        if(arr[i].indexOf(`${string}`) >= 0){
                return true
        }
    }
    return false


}

function victoryCondition(x, numero){
   let playerName = "Player 1"
    if(x !== true){
        playerName = "Player 2"
    }

    if(horizontal(x)){
        alert(playerName + " venceu!")
        return true
    }
    else if(vertical(x,numero)){
        alert(playerName + " venceu!")
        return true
    }
    else if(diagonals(x)) {
        alert(playerName + " venceu!")
        return true
    }
    else{
        return false
    }

}

//-----------------FIM CONDIÇÃO DE VITORIA
//-----------------CONDIÇÃO DE EMPATE
let clicks = 0
function empate(x, numero){
 if(clicks === 42 && !victoryCondition(x, numero)){
     alert('empate')
 }
}


function createDiv(container,className){
    const celula = document.createElement('div');
        celula.classList.add(className);
        container.appendChild(celula);
};


function createLayout(){
    for(let row in layout){
        const container = document.createElement('div');
            container.classList.add('container');
            mainContainer.appendChild(container);
        for(let column in layout[row]){
            let print = layout[row][column];
            if(print === 'l'){
                createDiv(container,'espaco');
            }
        }
    }
}
createLayout();
//Funções 

let player1 = true;

function movingLayout(linha, coluna, boolean){
    for(let i=0; i < layoutGuides.length;i++){
        layoutGuides[i] = layoutGuides[i].split('')
    }
    
    if(boolean === true){
        layoutGuides[linha][coluna] = "P";
        clicks++
    }else{
        layoutGuides[linha][coluna] = "E";
        clicks++

    }
    for(let i=0; i < layoutGuides.length;i++){
        layoutGuides[i] = layoutGuides[i].join('')
    }

}

const bloques = (cor, numero, img, img2) => {
    const coluna = document.querySelectorAll("#columna" + `${numero}`)
    

    for(let i=5; i>=0; i--){
        if(coluna[i].childElementCount === 0){
            const blocos = document.createElement("img");
            const blocos2 = document.createElement("img");
            blocos.src = `${img}`;
            blocos2.src = `${img2}`;
            blocos.classList.add(cor);
            blocos2.classList.add(cor+"1");
            coluna[i].appendChild(blocos)
            coluna[i].appendChild(blocos2)
            let linha = parseInt(coluna[i].parentElement.id[coluna[i].parentElement.id.length-1])

            if(player1 === true){
                player1=false;
                movingLayout(linha-1, numero-1, true);
                victoryCondition(true, numero-1);
                empate(true, numero-1);
            }else{
                player1=true;
                movingLayout(linha-1, numero-1, false);
                victoryCondition(false, numero-1);
                empate(false, numero-1);

            }
            break
        }
    }

}

const position = () =>{
    let final = []
    const fila = document.getElementById("container")
    let contFila = fila.childNodes
    let content;
    let filho;
       for(let i = 0; i < contFila.length; i++){
          final[i]=[];
           content = contFila[i].childNodes;
         for(let j = 0; j < content.length; j++){
             filho = content[j].lastChild
                if(content[j].childElementCount < 1){
                    final[i][j] = 0
                }
             if(content[j].childElementCount > 0 && filho.className == "black"){
                  final[i][j] = "black"
                }
                
             if(content[j].childElementCount > 0 && filho.className == "red"){
                  final[i][j] = "red"
                }
            }
        }
    return final
}

//  console.table(final)

/*
 listener de click
 */
mainContainer.addEventListener("click", (event) =>{
   
    let keyName = event.target.id;
    let numero = parseInt(keyName[keyName.length -1])
    let filaName = event.srcElement.parentNode.id;
    const fila = document.getElementById(filaName)

    if(player1 === true){

        bloques("black", numero, img[0],img[2]);
       sword.play();
    }else {
    bloques("red", numero, img[1],img[3]);
    dragon.play();


    }

    position();

})

const lineas = () =>{
    let state = false;
    const fila = document.getElementById("container")
    let contFila = fila.childNodes
    let bloques;
    let conteudo;
    let final = [];
    for(let i = 0; i < contFila.length; i++){
        contFila[i].id = "filera"+(i+1)
        bloques = contFila[i].childNodes
        for(let j = 0; j < bloques.length; j++){
            bloques[j].id = "columna"+(j+1);
        }
    }
}
lineas();
/*
   function changeToOne() {
        const s1 = document.getElementById("s1");
        const s2 = document.getElementById("s2");

        s2.disabled = true;
        s1.disabled = false;
      }

      function changeToTwo() {
        const s1 = document.getElementById("s1");
        const s2 = document.getElementById("s2");

        s1.disabled = true;
        s2.disabled = false;
      }

      const activate1 = document.getElementById("activate1");
      const activate2 = document.getElementById("activate2");

      activate1.addEventListener("click", changeToOne);
      activate2.addEventListener("click", changeToTwo);
*/
