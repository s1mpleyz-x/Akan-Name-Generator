const akanForm = document.getElementById("generator-form");

akanForm.addEventListener('submit', function(event) {
    console.log("Handler fired!"); // Confirms the function is running before the rest of the code
    event.preventDefault(); // Stops the page from reloading

    const day = document.getElementById('dob'); // Fetches the INPUT of the day, not its actual value
    const month = document.getElementById('mob');
    const year = document.getElementById('yob');

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null; // Manually checks for any gender input if for whatever reason the browser fails to

    let CC = Number((year.value).slice(0,2)); // .slice() method that fetches the actual input
    console.log(CC);

    let YY = Number((year.value).slice(2,4)); // Number to make sure the data type is actually a number
    console.log(YY);

    let MM = Number(month.value);
    console.log(MM);

    let DD = Number(day.value);
    console.log(DD);

    console.log(gender);

    const term1 = Math.floor(CC / 4); // Rounds to the nearest whole number DOWNWARDS
    const term2 = Math.floor((5 * YY) / 4);
    const term3 = Math.floor((26 * (MM + 1)) / 10);

    let dayOfTheWeek = ((term1 - 2 * CC - 1) + term2 + term3 + DD) % 7;
    console.log(dayOfTheWeek);

    let formSection = document.querySelector(".result-card");
    let formResult = document.querySelector(".name-generated");

    formSection.style.display = "block";

    function determineName(gender, d) {
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        switch (true) {
            case gender === "male":
                return maleNames[d];
                break;
            case gender === "female":
                return femaleNames[d];
                break;
            default:
                console.log("Error: No valid gender value.");
                return null;
        }
    }

    formResult.textContent = determineName(gender, dayOfTheWeek);
})