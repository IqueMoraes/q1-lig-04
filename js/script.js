//Variáveis
const mainContainer = document.getElementById('container');

const divPlayer = document.getElementById("divActualPlayer")
const playerName = document.getElementById("actualPlayerTextSpan")
const playerFigure = document.getElementById("actualPlayerFigure")
const playerImage = document.getElementById("actualPlayerImg")
const textPlayer = ["Cavaleiro", "Dragão"]

let img = ['./img/knight.png','./img/dragao.png','./img/espada.jpg', './img/orco.jpg'];

//Variáveis


//Áudio
const sword = new Audio();
sword.src = './audio/sword.mp3';
sword.volume = 0.40;

const dragon = new Audio();
dragon.src = './audio/dragonroar.mp3';
dragon.volume = 0.60;

//Áudio
//Áudio

//Background Audio Button
const backgroundAudio = document.getElementById('background-audio');
const play = document.getElementById('playmusic_button');
const pause = document.getElementById('pausemusic_button');
const musicVolume = document.getElementById('volume_audio');
const effectsVolume = document.getElementById('volume_audio');



play.addEventListener('click', () =>{
    backgroundAudio.volume = 0.30;
    backgroundAudio.play();
});

pause.addEventListener('click', () =>{
    backgroundAudio.pause();
});
musicVolume.addEventListener('change', (e) => {
    backgroundAudio.volume = e.currentTarget.value /100;
});
effectsVolume.addEventListener('change', (e) => {
    sword.volume = e.currentTarget.value /100;
    dragon.volume = e.currentTarget.value /100;

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
//PopUp Inicial

const initialBtn = document.getElementById('introducao__btn');
initialBtn.addEventListener('click',() =>{
const initialDiv = document.getElementById('introducao');
initialDiv.setAttribute('class', 'hidden');

});

const guerreiro = document.getElementById('guerreiro');
guerreiro.addEventListener('click',() =>{
const initialDiv2 = document.getElementById('introducao2');
initialDiv2.setAttribute('class', 'hidden');

player1 = true

});

const dragao = document.getElementById('dragao');
dragao.addEventListener('click',() =>{
const initialDiv2 = document.getElementById('introducao2');
initialDiv2.setAttribute('class', 'hidden');

player1 = false

});



//Funções 
//Personagem selecionado
function actualPlayer(){
    if(player1 === true){
        playerImage.setAttribute("src", img[1])
        playerName.innerText = textPlayer[1]
    }else{
        playerImage.setAttribute("src", img[0])
        playerName.innerText = textPlayer[0]


    }
}


//refresh do jogo
const refresh = document.getElementById('refresh_button')
refresh.addEventListener('click', reset = () =>{
    location.reload()
});
//CONDIÇÃO DE VITORIA


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
        mainContainer.removeEventListener("click", (event) =>{})
        }
    }
    return false


}

function victoryCondition(x, numero){
   let playerName = "Player 1"
    if(x !== true){
        playerName = "Player 2"
        //const mainContainer.removeEventListener("click", (event) =>{})
        mainContainer.removeEventListener("click", (event) =>{})
    }

    if(horizontal(x)){
        popupWinner(x)
        return true
        mainContainer.removeEventListener("click", (event) =>{})

    }
    else if(vertical(x,numero)){
        popupWinner(x)
        return true
        mainContainer.removeEventListener("click", (event) =>{})
    }
    else if(diagonals(x)) {
        popupWinner(x)
        return true
        mainContainer.removeEventListener("click", (event) =>{})
    }
    else{
        return false
    }

}


function popupWinner(x){
    const vitoria = new Audio();
    vitoria.src = './audio/conquer.mp3';
    vitoria.volume = 0.40;

    let playerName = "Guerreiro"
    const img = document.createElement('img');
    img.className = 'winner__img';
    img.src = './img/win.png';
    if(x !== true){
        playerName = "Dragão"
        img.src = './img/dragonIcon.png';
    }
    const winner = document.createElement('div');
    const text = document.createElement('p');
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');

    winner.className = 'winner__div';
    mainContainer.appendChild(winner);

    text.className = 'winner__text';
    text.innerText = `Parabéns, ${playerName}! Você venceu a batalha DangeoLig-4`;
    winner.appendChild(text);
    
    btnDiv.className = 'winner__div__btn';
    winner.appendChild(btnDiv)

    btn.className = 'winner__btn';
    btn.innerText = 'Nova batalha!';

    btnDiv.appendChild(btn);
    btnDiv.appendChild(img);

    
   
    btn.addEventListener('click', reset = () =>{
        location.reload() 
    });
    
    vitoria.play();
}
//-----------------FIM CONDIÇÃO DE VITORIA
//-----------------CONDIÇÃO DE EMPATE
let clicks = 0
function empate(x, numero){
 if(clicks === 42 && !victoryCondition(x, numero)){
    popupDraw()
 }
}

function popupDraw(){
    const draw = document.createElement('div');
    const text = document.createElement('p');
    const btnDiv = document.createElement('div');
    const btn = document.createElement('button');
    const img = document.createElement('img');

    draw.className = 'draw__div';
    mainContainer.appendChild(draw);
    
    text.className = 'draw__text';
    text.innerText = 'Nem vencedor nem vencido... apenas empate.';
    draw.appendChild(text);
    
    btnDiv.className = 'draw__div__btn';
    draw.appendChild(btnDiv);
   
    btn.className = 'draw__btn';
    btn.innerText = 'Nova batalha!';
    btnDiv.appendChild(btn);
    
    img.className = 'draw__img';
    img.src = './img/draw.png';
    btnDiv.appendChild(img);

    btn.addEventListener('click', reset = () =>{
        location.reload()
    });

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

const bloques = (cor, numero, img) => {
    const coluna = document.querySelectorAll("#columna" + `${numero}`)
    

    for(let i=5; i>=0; i--){
        if(coluna[i].childElementCount === 0){
            const blocos = document.createElement("img");

            blocos.src = `${img}`;
ç
            blocos.classList.add(cor);
         
            coluna[i].appendChild(blocos)
 

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
   
   actualPlayer();

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
