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
//Layout

//Funções 
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

//Event Listener
const div = document.querySelector('.espaco');
let change = true;

div.addEventListener('click', () =>{

    if(change === true){
      const red = document.createElement('div');
        red.classList.add = ('red');
        div.appendChild(red);

        change = false;
    }

    if(change === false){
        const black = document.createElement('div');
        red.classList.add = ('black');
        div.appendChild(black);

        change = true;
    }
});
//Event Listener