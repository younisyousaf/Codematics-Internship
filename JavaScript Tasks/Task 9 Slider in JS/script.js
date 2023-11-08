var slide_images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg"];
var slide_caption = ["The Woods", "Cinque Terre", "Mountains and Fjords", "Northern Lights", "Nature and Sunrise", "Snowy Mountains"];
var current_image_index = 0;

//Setting Slider for Arrow-Right

document.getElementById("rightbutton").onclick = function () {
    current_image_index = current_image_index + 1;
    if (current_image_index == slide_images.length) {
        current_image_index = 0;
    }
    document.getElementById("Slider_Image").setAttribute("src", slide_images[current_image_index]);
    document.getElementById("Captions").innerText = slide_caption[current_image_index];
};

//Setting Slider For Arrow-Left
document.getElementById("leftbutton").onclick = function () {
    current_image_index = current_image_index - 1;
    if (current_image_index < 0) {
        current_image_index = slide_images.length - 1;
    }
    document.getElementById("Slider_Image").setAttribute("src", slide_images[current_image_index]);
    document.getElementById("Captions").innerText = slide_caption[current_image_index];
};


//Images will slide Automatically
setInterval(myTimer, 3000);
function myTimer() {
    current_image_index = current_image_index + 1;
    if (current_image_index == slide_images.length) {
        current_image_index = 0;
    }
    document.getElementById("Slider_Image").setAttribute("src", slide_images[current_image_index]);
    document.getElementById("Captions").innerText = slide_caption[current_image_index];
}

//Image Will Slide When we Click on the Image Given Below the Slider
function TapImage(a) {
    current_image_index = a;

    document.getElementById("Slider_Image").setAttribute("src", slide_images[current_image_index]);
    document.getElementById("Captions").innerText = slide_caption[current_image_index];
}