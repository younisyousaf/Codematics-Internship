// const mainContainer = document.getElementById("main-container")
const inputContent2 = document.getElementById("input-content2");

function addInputElements() {

    let div1 = document.createElement('div');
    div1.setAttribute("id","first-div")
    inputContent2.appendChild(div1)

    let label = document.createElement('label');
    label.for = 'myName2';
    label.innerText = 'Name:';

    let input = document.createElement('input');
    input.placeholder = 'Name Here...';

    div1.appendChild(label);
    div1.appendChild(input);

    let label2 = document.createElement('label');
    label2.for = 'mydegree2';
    label2.innerText = 'Degree:';

    let input2 = document.createElement('input');
    input2.placeholder = "Degree Here...";
    div1.appendChild(label2);
    div1.appendChild(input2);

    let label3 = document.createElement('label');
    label3.for = 'mycgpa2';
    label3.innerText = ' CGPA:';

    let input3 = document.createElement('input');
    input3.placeholder = "CGPA Here...";
    div1.appendChild(label3);
    div1.appendChild(input3);

    let button = document.createElement('button');
    button.setAttribute("class","mystyle")
    button.innerText = 'Remove';
    div1.appendChild(button);

}

inputContent2.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
  
});

