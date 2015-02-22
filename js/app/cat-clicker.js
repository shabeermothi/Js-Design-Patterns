/**
 * Created by shabeermothi on 22/02/15.
 */

counter = 0; // Global variable counter

/*
 * @function catClicker
 * @description On click of cat image increments the counter by 1
 *
 */
var catClicker = function () {

    var catImage = document.getElementById("cat-img");
    catImage.addEventListener("click", function () {
        counter++;  // Increment the counter on click of cat image
        document.getElementById("cat-click-counter").innerHTML = counter; // Display the incremented counter in the page
    });

};