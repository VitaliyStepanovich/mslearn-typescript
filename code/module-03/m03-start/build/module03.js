/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanProps) {
    // Calculates the monthly payment of an interest only loan
    var interest = loanProps.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanProps.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventionalLoanProps) {
    // Calculates the monthly payment of a conventional loan
    var interest = conventionalLoanProps.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = conventionalLoanProps.principle * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoanProps.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
