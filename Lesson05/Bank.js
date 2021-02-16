let bankOpen = true;
let balance = 1000;

while (bankOpen) {
    const option = prompt('Enter Q to quit, W to withdraw, D to deposit, or B to view balance ');
    switch (option) {
        case 'Q':
            alert('Thank you for using our service');
            bankOpen = false;
            break;

    // bankOpen = false;
    // console.log('You quit');
    // break

        case 'B': // View current balance 
            alert('Your balance is: $' + balance);
            break;
        case 'W':  // Withdraw the money
            const amountWithdrawn = prompt('How much do you want to withdraw?'); // prompt option to users
            if (balance - amountWithdrawn < 0 ) { // check current minus  the withdraw if less than zero
              alert('You have insuffient fund, please deposit your money to avoid fees.');   // less than zero prompt to deposit more money
            } else {(balance = balance - amountWithdrawn); // if condition met, display the resolve 
            alert('You are withdrawing: $' + amountWithdrawn + ' your remaining balance is: $' + balance);
            }
            break;

             // console.log(amountWitdrawn, 'amount');
            // balance = balance - amountWitdrawn;
            // console.log(balance, 'balance');
            // break;

        case 'D': // Deposit 
            const depositAmount = prompt('How much do you want to deposit?'); // prompt message to users
            balance = balance + Number(depositAmount); // balance plus deposit 
            alert('You are depositing: $' + depositAmount + ' your total balance is: $' + balance) // the total amount

   // chanllange exercise if show alert if amount deposit more than $50,000 is the maximum.
            if (balance + depositAmount > 50,000 ) { 
                alert('Your deposit has reached the maximum allowance. Please see our customer service');  
              } else {(balance = balance + depositAmount);  
              alert('You are depositing: $' + depositAmount + ' your remaining balance is: $' + balance);
              }
            break;
           
        default:
            alert('You input is invalid. Please try again!');
            break;
        }     
    }
    