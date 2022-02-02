/*
===================================================    
Title:  Assignment 5.2 - Bob's Automotive Repair Shop
Author: Professor Krasso
Date:  01 February 2022
Modified By: Orawan Rabampho
Description: Create product selects and calculate total price.
Source:  
Extends JavaScripts HTMLElement - https://itnext.io/how-to-extend-a-native-html-element-1d4674e09c22 
JavaScripts count - http://www.java2s.com/ref/javascript/javascript-array-count.html
JavaScript Iterator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
====================================================
*/

//create shopping cart class and export to ShoppingCart class
export class ShoppingCart 
{
    constructor()
    {
        //crate product with an empty array
        this.products = [];
    }
    //create count function and return the length
    count()
    {
        return this.products.length;
    }
    //create add product function and push to array
    add(product)
    {
        this.products.push(product);
    }
    //create an iterator
    *[Symbol.iterator]()
    {
        for (let product of this.products)
        {
            yield product;
        }
    }
}