/*
===================================================    
Title:  Assignment 5.2 - Bob's Automotive Repair Shop
Author: Professor Krasso
Date:  01 February 2022
Modified By: Orawan Rabampho
Description: Create product selects and calculate total price.
Source:  
Extends JavaScripts HTMLElement - https://itnext.io/how-to-extend-a-native-html-element-1d4674e09c22 
====================================================
*/

//create product than export
export class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
        //generate a new random value and assign to id field
        this.id = Math.random().toString(16).slice(2);
    }
}