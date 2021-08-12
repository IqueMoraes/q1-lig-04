//Variáveis
const mainContainer = document.getElementById('container');
let img = ['./img/knight.png','./img/dragao.png'];
//Variáveis
function popupWelcome(){
    const welcome = document.createElement('div');
    winner.className = 'welcome__div';
    mainContainer.appendChild(welcome);
    const text = document.createElement('p');
    text.className = 'welcome__text';
    text.innerText = 'Parabéns! Você venceu a batalha DangeoLig-4';
    const btn = document.createElement('button');
    btn.className = 'welcome__btn';
    btn.innerText = 'Continuar';
    welcome.appendChild(text);
    welcome.appendChild(btn);
    // const img = document.createElement('img');
    // img.className = 'welcome__img';
    // img.src = './img/';
    // winner.appendChild(img);

    btn.addEventListener('click', popupPlayers());
    
    function popupPlayers(){
    const players = document.createElement('div');
    winner.className = 'players__div';
    mainContainer.appendChild(welcome);
    const text = document.createElement('p');
    text.className = 'players__text';
    text.innerText = 'Parabéns! Você venceu a batalha DangeoLig-4';
    const btn1 = document.createElement('button');
    btn.className = 'players__btn';
    btn.innerText = 'Guerreiro';
    const btn2 = document.createElement('button');
    btn.className = 'players__btn';
    btn.innerText = 'Dragão';
    players.appendChild(text);
    players.appendChild(btn1);
    players.appendChild(btn2);

    btn1.addEventListener('click', popupStart1());
    btn2.addEventListener('click', popupStart2());
    }
   

}


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
        popupWinner()
        return true
    }
    else if(vertical(x,numero)){
        popupWinner()
        return true
    }
    else if(diagonals(x)) {
        popupWinner()
        return true
    }
    else{
        return false
    }

}

function popupWinner(){
    const winner = document.createElement('div');
    winner.className = 'winner__div';
    mainContainer.appendChild(winner);
    const text = document.createElement('p');
    text.className = 'winner__text';
    text.innerText = 'Parabéns! Você venceu a batalha DangeoLig-4';
    const btn = document.createElement('button');
    btn.className = 'winner__btn';
    btn.innerText = 'Nova batalha!';
    winner.appendChild(text);
    winner.appendChild(btn);
    const img = document.createElement('img');
    img.className = 'winner__img';
    img.src = './img/win.png';
    winner.appendChild(img);

    btn.addEventListener('click', reset = () =>{
        location.reload()
    });

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
    draw.className = 'draw__div';
    mainContainer.appendChild(draw);
    const text = document.createElement('p');
    text.className = 'draw__text';
    text.innerText = 'Nem vencedor nem vencido... apenas empate';
    const btn = document.createElement('button');
    btn.className = 'draw__btn';
    btn.innerText = 'Nova batalha!';
    draw.appendChild(text);
    draw.appendChild(btn);
    const img = document.createElement('img');
    img.className = 'draw__img';
    img.src = './img/draw.png';
    draw.appendChild(img);

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
            blocos.src = `${img}`
            blocos.classList.add(cor)
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
    let filaName = event.srcElement.parentNode.id;
    const fila = document.getElementById(filaName)

    if(player1 === true){

        bloques("black", numero, img[0]);
    }else {
    bloques("red", numero, img[1]);
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
