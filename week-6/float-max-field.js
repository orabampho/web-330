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
export class FloatMaxField {
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }
    //create validate function
    validate(){
        //boolean value will return true if value of paraFloat(field) is less than max value.
        let floatField = parseFloat(this.field);
        return floatField < this.max;
    }
    //create getMessage function return string.
    getMessage(){
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
}