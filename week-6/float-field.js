//create class FloatField and set parameters.  export class
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
//crate class FloatField and export
export class FloatField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    //validate whether a given value is an illegal number or not
    validate(){
        return !isNaN(parseFloat(this.field));
    }
    //create a getMessage function, return string message
    getMessage(){
        return (this.name + `must be a float value`+ this.field);
    }
}