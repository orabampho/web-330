/*
===================================================    
Title:  Assignment 3.2 - Restaurant App
Author: Professor Krasso
Date:  22 January 2022
Modified By: Orawan Rabampho
Description: Create app to select items and calculate 
total price using JS import/export
Source:  
Material Design Icons - "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
====================================================
*/

//import statement for the product.js file and inherit the base classes properties by referencing the extends keyword

import { Product } from "./product.js";

//Pass the parameters to the parent through the super() function.

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}