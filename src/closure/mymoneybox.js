//no recuerda el valor anterior para sumar a nuestra alcancia los dos valores por eso vamos a utilizar el closure

//function moneyBox(coins) {
//  let saveCoints = 0;
//    saveCoints += coins;
//    console.log(`MoneyBox: $${saveCoints}`);
// }

// moneyBox(5);
// moneyBox(4);


//ejemplo con closure alcancia
function moneyBox() {
    let saveCoints = 0;
    function countCoins(coins) {
        saveCoints += coins;
        console.log(`MoneyBox: $${saveCoints}`)
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(6);
myMoneyBox(4);

const moneyBoxLuz = moneyBox();
moneyBoxLuz(10);
moneyBoxLuz(15);