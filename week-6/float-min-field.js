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
//create class FloatMaxField and set parameters. export class
export class FloatMinField {
    constructor(name, field, min){
        this.name = name;
        this.field = field;
        this.min = min;
    }
    //create validate function
    validate(){
        //boolean value will return true if vale of paraFloat(field) is less than max value.
        let floatField = parseFloat(this.field);
        return floatField > this.min;
    }
    //create getMessage function return string.
    getMessage(){
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
    }
}