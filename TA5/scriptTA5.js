function leapYears(año){
    let isBisiesto = false;
    //Un año bisiesto es aquel que es divisible entre 4, o si es divisible entre 100 y también es divisible entre 400.
    if ((año % 4) === 0 || (año % 100) === 0 && (año % 400) === 0 ) {
        isBisiesto = true;
    } else {
        isBisiesto = false;
    }

    console.log(isBisiesto);
}leapYears(1940);

function leapYear2(año)
{
    let isBisiesto = ((año % 4) === 0 || (año % 100) === 0 && (año % 400) === 0 );
    console.log(isBisiesto);
}leapYear2(2001);