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
How to Toggle - https://www.w3schools.com/howto/howto_js_toggle_like.asp
====================================================
*/

//create four class and empty array
export class Bill
{
constructor(_beverages, _appetizers, _mainCourses, _desserts){
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
}
    
//push beverage object to the array
addBeverage(beverage)
{
    this._beverages.push(beverage);
}

//push appetizer object to the array
addAppetizer(appetizer)
{
    this._appetizers.push(appetizer);
}

//push mainCourse object to the array
addMainCourse(mainCourse)
{
    this._mainCourses.push(mainCourse);
}

//push desserts object to the array
addDessert(dessert)
{
    this._desserts.push(dessert);
}

//Create getTotal function, using parseFloat for each of the categories.
getTotal()
{
    let total = 0; //set default value to 0

    //built-in forEach() function, loop over each array and calculate the total using the price field of each object
    let beverageTotal = this._beverages.forEach(function(beverage)
    {
        total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function(appetizer)
    {
        total += parseFloat(appetizer.price);
    });
    
    let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
    {
        total += parseFloat(mainCourse.price);
    });

    let dessertsTotal = this._desserts.forEach(function(desserts)
    {
        total += parseFloat(desserts.price);
    });

    //return the total variable and set its precisions to two decimal places
    return total.toFixed(2);
}
}
