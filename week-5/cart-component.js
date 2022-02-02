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

//create cart component class
export class CartComponent extends HTMLElement 
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;        
    }
}

customElements.define("cart-component", CartComponent);
