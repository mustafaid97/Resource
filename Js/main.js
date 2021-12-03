

// select landing page element 
let landingPage = document.querySelector(".landing-page");

// Get Array of Imgs 
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];



setInterval(() => {

    // Get Random Number 
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // Change Background Image Url 
    landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';

}, 10000);






document.querySelector(".i-2").onclick = function() {

    document.querySelector(".response-links").classList.toggle("open");
}

document.querySelector(".response-links").onclick = function() {

    document.querySelector(".response-links").classList.remove("open");

}




document.querySelector(".difrent").onclick = function() {

    document.querySelector(".other-list").classList.toggle("show");
}


document.querySelector(".other-list").onclick = function() {

    document.querySelector(".other-list").classList.remove("show");
}
