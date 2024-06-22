import inquirer from "inquirer"


const Currency : any = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt
([
{   name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{   
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
},
{
    name: "amount",
    message: "Enter your amount",
    type: "Number"

}
]
)
let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = Currency[userFromCurrency]  // exchange rate
let toAmount = Currency[userToCurrency]  // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount  // USD Base Currency// 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
