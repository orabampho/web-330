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
//create RequireField and set parameters. export class
export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    //create validate function.
    validate()
    {
        //will return true if this.field is a string.
        return Boolean(this.field);
    };

    //create getMessage function, returns string value of <name> is a required field.
    getMessage()
    {
        return `${this.name} is a required field.`;
    }
}