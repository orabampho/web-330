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
//add import statement
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from  "./float-max-field.js";

//create Validator class and export
export class Validator 
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    //create validators and messages class properties with empty array 
        this.validators = [];
        this.messages = [];
    }

    /*create a function addRequiredField() in the body push a new instance of the RequiredField class to validators array using the name and field as parameters.*/
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));        
    }
    /*create a function named addRequiredFloatField() and in the body of the function push a new instance of the FloatField class to the validators array using the name and field as parameters.*/
    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }
    //create addFloatMinField function push to validators array using name, field, min as parameters.
    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    //create addFloatMaxField with parameter max, push to validators array.
    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    //create validate function.
    validate()
    {
    ///iterate through RequiredField, FloatField, Min and Max of validators array.
        for (let validator of this.validators)
        {
            //call RequiredField.validate() for true or false value.
            if(!validator.validate())
            {
            //if RequireField validate returns false,push iterated.getMessage() to message array.
                    this.messages.push(validator.getMessage());
                    return false;
                }
            }
        return true;
    }
}