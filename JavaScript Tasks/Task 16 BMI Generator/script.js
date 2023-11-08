const myForm = document.querySelector('form');

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Give a Valid Height! ${height}`;
    } else if (weight === '' || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please Give a Valid Weight! ${weight}`;
    } else {
        const myBMI = (weight / (height * height / 10000)).toFixed(2);
        result.innerHTML = `<span>${myBMI}</span>`
        if (myBMI <= 18.6) {
            result.innerHTML = `You are Underweighted: BMI is : <span> ${myBMI}</span>`;
        } else if (myBMI > 18.6 && myBMI <= 24.9) {
            result.innerHTML = `You are in Normal Range : BMI is : <span> ${myBMI}</span>`;
        } else {
            result.innerHTML = `You are OverWeighted: BMI is : <span> ${myBMI} </span>`;
        }
    }

});



