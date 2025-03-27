function sumAll(a, b) {
    let res = 0;
    if (a<=b){
        for (let i = a; i <= b; i++) {
            res += i;
        }
    } else {
        for (let i = a; i >= b; i--) {
            res += i;
        }
    }
    console.log(res);
}sumAll(3,1)