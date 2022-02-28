/*
===================================================    
Title:  Assignment 8.2 - WhatABook, Part 2
Author: Professor Krasso
Date:  27 February 2022
Modified By: Orawan Rabampho
Description: 
Source:  Source codes assignment instructions.
Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
====================================================
*/

//export HttpClient
export class HttpClient {

    // get function w/ url parameter and new params object 
    async get(url, params = '') {

       let urlObject = new URL(url);

        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject; 

        const res = await fetch(urlObject.toString(),{
            method: "GET", 
        });

        /* Return object */
        return res.json();
    }
}

