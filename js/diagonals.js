
function decreasingDiagonal(){
    let arr = []
    for(let giro =0; giro<6; giro ++){

        if(giro === 0){
            let diagonal1=[2,0];
            let index ="";
            let a = diagonal1[0]
            let b = diagonal1[1]
              for(let i=0; i< 4; i++){
                 
                index += layoutGuides[a][b]
                a++
                b++
              }
              arr.push(index)
        }
        else if(giro ===1){
            let diagonal2=[1,0];
            index ="";
            a = diagonal2[0]
            b = diagonal2[1]
            for(let i=0; i< 5; i++){
                index += layoutGuides[a][b]
                a++
                b++
            }
            arr.push(index)
        }
        else if(giro ===2){
            let diagonal3=[0,0];
            index ="";
            a = diagonal3[0]
            b = diagonal3[1]
            for(let i=0; i< 6; i++){
                index += layoutGuides[a][b]
                a++
                b++
            }
            arr.push(index)
        }
        else if(giro ===3){
            let diagonal4=[0,1];
            index ="";
            a = diagonal4[0]
            b = diagonal4[1]
            for(let i=0; i< 6; i++){
                index += layoutGuides[a][b]
                a++
                b++
            }
            arr.push(index)
        }
        else if(giro ===4){
            let diagonal5=[0,2];
            index ="";
            a = diagonal5[0]
            b = diagonal5[1]
            for(let i=0; i< 5; i++){
                index += layoutGuides[a][b]
                a++
                b++
            }
            arr.push(index)
        }
        else if(giro ===5){
            let diagonal6=[0,3];
            index ="";
            a = diagonal6[0]
            b = diagonal6[1]
            for(let i=0; i< 4; i++){
                index += layoutGuides[a][b]
                a++
                b++
            }
            arr.push(index)
        }
    }
 

return arr

}


function increasingDiagonal(){
    let arr = []
    for(let giro =0; giro<6; giro ++){

        if(giro === 0){
            let diagonal1=[3,0];
            let index ="";
            let a = diagonal1[0]
            let b = diagonal1[1]
              for(let i=0; i< 4; i++){
                 
                index += layoutGuides[a][b]
                a--
                b++
              }
              arr.push(index)
        }
        else if(giro ===1){
            let diagonal2=[4,0];
            index ="";
            a = diagonal2[0]
            b = diagonal2[1]
            for(let i=0; i< 5; i++){
                index += layoutGuides[a][b]
                a--
                b++
            }
            arr.push(index)
        }
        else if(giro ===2){
            let diagonal3=[5,0];
            index ="";
            a = diagonal3[0]
            b = diagonal3[1]
            for(let i=0; i< 6; i++){
                index += layoutGuides[a][b]
                a--
                b++
            }
            arr.push(index)
        }
        else if(giro ===3){
            let diagonal4=[5,1];
            index ="";
            a = diagonal4[0]
            b = diagonal4[1]
            for(let i=0; i< 6; i++){
                index += layoutGuides[a][b]
                a--
                b++
            }
            arr.push(index)
        }
        else if(giro ===4){
            let diagonal5=[5,2];
            index ="";
            a = diagonal5[0]
            b = diagonal5[1]
            for(let i=0; i< 5; i++){
                index += layoutGuides[a][b]
                a--
                b++
            }
            arr.push(index)
        }
        else if(giro ===5){
            let diagonal6=[5,3];
            index ="";
            a = diagonal6[0]
            b = diagonal6[1]
            for(let i=0; i< 4; i++){
                index += layoutGuides[a][b]
                a--
                b++
            }
            arr.push(index)
        }
    }
 

return arr

}