const myGlobal = 1;

function myFunction() {
    const myNumber = 2;
    console.log(myGlobal);

    function parent() { //funcion interna
        const inner = 3;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();