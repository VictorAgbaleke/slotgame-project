//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. spin slot machine
//5. check if the user won
//6. give the user their winnings
//7. pla again

const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){

    
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if(isNaN(numberDepositAmount) || numberDepositAmount<= 0){
        console.log("INVALID DEPOSIT AMOUNT, TRY AGAIN");
    }else{
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () =>{
    while(true){

    
        const lines = prompt("Enter the number of lines to bet on(1-3): ");
        const numberofLines = parseFloat(lines);
    
        if(isNaN(numberofLines) || numberofLines<= 0 || numberofLines > 3){
            console.log("Invalid number of lines, TRY AGAIN");
        }else{
            return numberofLines;
        }
    }
};

const getBet = (balance) =>{
    while(true){

    
        const bet = prompt("Enter the total bet: ");
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberDepositAmount) || numberDepositAmount<= 0){
            console.log("INVALID DEPOSIT AMOUNT, TRY AGAIN");
        }else{
            return numberDepositAmount;
        }
    }
}

let balance = deposit();
const numberofLines = getNumberOfLines();

console.log(depositAmount);
console.log(numberofLines);