/*
 Main application
*/
import * as dataModule from "./modules/data";
import * as query from "./modules/data"; // extra line example

(function(){

  'use strict';

  // example module import.
  dataModule.getData();

  console.log('bla');

  let example:string = 'testing';
  document.body.innerHTML = example;

})();