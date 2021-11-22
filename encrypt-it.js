/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    
    //Part 1
    //console.log("Window loaded!");
    //alert("Window loaded!");

    //Part 2
    //const btn = document.getElementById("encrypt-it");
    //btn.addEventListener('click', handleClick);

    //part 3
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener('click', cipherText);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener('click', reset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  
  //part two function
  function handleClick(event) {
    alert("Button Clicked!");
    console.log("Button Clicked!");
  }

  //part three function
  function cipherText(event) {
    var text = document.getElementById("input-text");
    text = text.value.toLowerCase();

    let result = "";

    //loop through all the characters inputted
    for(let i = 0; i < text.length; i++) {

      //if characters isn't a letter than just add to result
      if(text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      
      //if the letter is 'z' then add 'a' to result
      } else if(text[i] == 'z') {
        result += 'a';

      //else add the next letter to result 
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }

    //print out the result 
    document.getElementById("result").innerHTML = result;
  }

  //reset both fields
  function reset(event) { 
    document.getElementById("input-text").value = "";
    document.getElementById("result").innerHTML = "";
  }

})();
