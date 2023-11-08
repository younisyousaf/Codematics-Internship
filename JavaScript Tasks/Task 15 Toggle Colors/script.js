const button = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

button.forEach(
    function (buttons) {
    buttons.addEventListener('click', function (e) {
        if (e.target.id === "grey") {
            body.style.background = e.target.id;
        }
       else if(e.target.id === "purple"){
            body.style.background = e.target.id;
        }
        else  if(e.target.id === "yellow"){
            body.style.background = e.target.id;
        }
        else  if(e.target.id === "red"){
            body.style.background = e.target.id;
        }
        else  if(e.target.id === "skyblue"){
            body.style.background = e.target.id;
        }
        else{
            body.style.background = "white";
        }
    })
});