/*
===================================================    
Title:  Assignment 6.2 - Future Value App
Author: Professor Krasso
Date:  13 February 2022
Modified By: Orawan Rabampho
Description: Create a calculator to calculate future 
interest rate.
Source:  Source codes assignment instructions.
====================================================
*/
//create class FinanceCalculator and export class
export class FinanceCalculator{
    //create static variable equal to 12 months in a year
    static MONTHS_IN_YEAR = 12;

//create static function with 2 parameters   
 static calculateFutureValue (monthlyPayment, rate, years){
     this.monthlyPayment = monthlyPayment;
     this.rate = rate;
     this.years = years;

//create months variable equal to MONTHS_IN_YEAR times parameter years
let months = years * this.MONTHS_IN_YEAR;

 //create interestRate
 let interestRate = 1 + rate/100; 
 
 //create presentValue and assign to the monthlyPayment
 let presentValue = monthlyPayment * months;

 //create futureValue
 let futureValue = presentValue * (Math.pow(interestRate, months));

 //return futureValue to 2 decimal 
 return futureValue.toFixed(2);
 }

 //create static to convert to currency
 static convertToCurrency(field){
    //create variable for currencyFormatter
    let currencyFormatter = new Intl.NumberFormat("en-US",
    {
        //set style to USD
        style: "currency",
        currency: "USD"
    });
    return currencyFormatter.format(field);
 }
}