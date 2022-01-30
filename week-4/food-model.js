/*
===================================================    
Title:  Assignment 4.2 - Calorie App
Author: Professor Krasso
Date:  30 January 2022
Modified By: Orawan Rabampho
Description: Create calorie convert app.
Source:  
Static data - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks
====================================================
*/

//create FoodModel class and export the class
export class FoodModel {
    constructor(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}