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

//import FoodModel
import { FoodModel } from "./food-model.js";

//create CalorieConverter class with static variable and export class
export class CalorieConverter{

    //adding 6 FoodModel objects
    static data = [
    new FoodModel (1007, "Egg", 78),
    new FoodModel (1008, "Apple", 95),    
    new FoodModel (1009, "Hamburger", 345),
    new FoodModel (1010, "Fries", 400),
    new FoodModel (1011, "Banana", 105),
    new FoodModel (1012, "Soda", 150)
    ];

//using js filter to return data that match the "name"    
static find(name){
    return this.data.filter(FoodModel => FoodModel.name.toLowerCase().includes(name));
}    

};

    

