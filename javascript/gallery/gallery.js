/*Name this external file gallery.js*/
let image = "image";

function upDate(element) {
  /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

  // background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg)
  document.getElementById("image").style.backgroundImage =
    "url(" + element.src + ")";
  document.getElementById("image").innerHTML = element.alt;
}

function unDo() {
  /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */

  document.getElementById("image").style.backgroundImage = "url()";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}
