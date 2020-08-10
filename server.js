"use strict"
let http = require('http');
const xmod = require('./xternalModule.js');
const express = require('express');
const neatos = require('./xternalModule.js');

let server = (request, response) => {
    
    let fax = Math.floor(Math.random() * neatos.length);
    response.write(neatos[fax]);

    response.end();
}
http.createServer(server).listen(3000);