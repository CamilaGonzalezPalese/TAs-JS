function removeFromArray(arreglo,  item){
    let arrRem = []
    for (let i = 0; i < arreglo.length; i++) {
        if (i !== item){
            arrRem.push(arreglo[i]);
        }
        
    }
    console.log(arrRem);
}removeFromArray ([1,2,3,5,4],2)

function removeFromArray2(arreglo,  item){
    let res = arreglo.filter((elem) => elem-1 !== item);
    console.log(res);
}removeFromArray2 ([1,2,3,5,4],2)
