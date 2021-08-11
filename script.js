//Variáveis
const mainContainer = document.getElementById('container');
//Variáveis

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
    for(let i=0; i<layoutGuides.length ; i++){
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
    for(let i=0; i<12 ; i++){
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

function empate(x, numero){
    let espacos= true;
    for(let i=0; i<layoutGuides.length; i++){
        for(let j=0; j<layoutGuides[i].length; j++){
            if(layoutGuides[i][j] === "l"){
                espacos = false
            }
        }
    }

    if(victoryCondition(x, numero) && espacos === true){
        alert("EMPATE")
        return true
    }else{
        return false
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

               // container.id="column"
            }
        }
    }
}
createLayout();
//Funções 

let player1 = true;

function movingLayout(linha, coluna, boolean){
    // str.replace(regexp|substr, newSubStr|function)
    for(let i=0; i<layoutGuides.length;i++){
        layoutGuides[i] = layoutGuides[i].split('')
    }
    
    if(boolean === true){
        layoutGuides[linha][coluna] = "P";
    }else{
        layoutGuides[linha][coluna] = "E";

    }
    for(let i=0; i<layoutGuides.length;i++){
        layoutGuides[i] = layoutGuides[i].join('')
    }

}


const bloques = (cor, numero) => {
    const coluna = document.querySelectorAll("#columna" + `${numero}`)
    

    for(let i=5; i>=0; i--){
        if(coluna[i].childElementCount === 0){
            const blocos = document.createElement("div")
            blocos.classList.add(cor)
            coluna[i].appendChild(blocos)
            let linha = parseInt(coluna[i].parentElement.id[coluna[i].parentElement.id.length-1])
            // console.log(linha)

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
//////////////////////
const destino = () => {
    const destin = document.getElementById("container")
    // console.log(destin.children)
    //let final = [];
    //for(let i = 0; i < )
}
////////////////////////
mainContainer.addEventListener("click", (event) =>{
    
    let keyName = event.target.id;
    let numero = parseInt(keyName[keyName.length -1])
    let filaName = event.srcElement.parentNode.id;
  //  console.log(keyName)
  //  console.log(filaName)
    const fila = document.getElementById(filaName)
    // console.log(fila.id)
    if(player1 === true){
        bloques("black", numero);
    }else {
    bloques("red", numero);
    }

    destino();
})
/*
 listener de click
 */
const lineas = () =>{
    const fila = document.getElementById("container")
    let contFila = fila.childNodes
    let bloques;
    for(let i = 0; i < contFila.length; i++){
        contFila[i].id = "filera"+(i+1)
        bloques = contFila[i].childNodes
        for(let j = 0; j < bloques.length; j++){
            bloques[j].id = "columna"+(j+1)
        }
    }
}
lineas();

