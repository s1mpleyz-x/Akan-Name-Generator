const akanForm = document.getElementById("generator-form");

akanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from reloading

    const day = document.getElementById('dob'); // Fetches the INPUT of the day, not its actual value
    const month = document.getElementById('mob');
    const year = document.getElementById('yob');

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null; // Manually checks for any gender input if for whatever reason the browser fails to

    let CC = (year.value).slice(0,2); // .slice() method that fetches the actual input
    console.log(CC);

    let YY = (year.value).slice(2,4);
    console.log(YY);

    let MM = month.value;
    console.log(MM);

    let d = (((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4​) + ((26 * (MM + 1)) / 10​) + DD) % 7;
    console.log(d);

})