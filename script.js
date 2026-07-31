// ------------------------------ FORM SUBMISSION EVENT HANDLER ------------------------------ \\

const akanForm = document.getElementById("generator-form");

akanForm.addEventListener('submit', function(event) {
    console.log("Handler fired!"); // Confirms the function is running
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

    let dayOfTheWeek = Math.floor((((CC / 4) - 2) * (CC - 1)) + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7; // Math.floor() returns the nearest whole number DOWNWARDS

    console.log(dayOfTheWeek);

    let formSection = document.querySelector(".result-card");
    let formResult = document.querySelector(".name-generated");
    let formDescription = document.querySelector(".name-description");
    let formSubmissionMessage = document.querySelector(".submission-message");

    formSection.style.display = "block";
    formSubmissionMessage.style.display = "block"
    

    function determineName(gender, d) {

        const akanDays = [
            {
                day: "Sunday", 
                maleName: "Kwasi",
                femaleName: "Akosua",
                description: "Those born on Sunday are traditionally seen as natural leaders — charismatic, confident, and drawn to the spotlight. Kwasi and Akosua are often described as courageous and quick to take initiative, with a warmth that draws others toward them."
            },
            {
                day: "Monday",
                maleName: "Kwadwo",
                femaleName: "Adwoa",
                description: "Monday-born individuals are associated with calm, peaceful temperaments. Kwadwo and Adwoa are often seen as gentle, thoughtful, and even-tempered — the steady, reassuring presence in a room."
            },
            {
                day: "Tuesday",
                maleName: "Kwabena",
                femaleName: "Abenaa",
                description: "Tuesday carries a reputation for fierce, fiery energy. Kwabena and Abenaa are often described as bold and assertive, unafraid of confrontation, with a strong sense of justice and a fighting spirit."
            },
            {
                day: "Wednesday",
                maleName: "Kwaku",
                femaleName: "Akua",
                description: "Those born on Wednesday are linked to wit, cleverness, and a touch of mischief. Kwaku and Akua are often seen as sharp-minded problem-solvers, resourceful and quick to find a clever way around any obstacle."
            },
            {
                day: "Thursday",
                maleName: "Yaw",
                femaleName: "Yaa",
                description: "Thursday-born individuals are associated with strength, courage, and quiet resilience. Yaw and Yaa are often described as steady under pressure, dependable, and carrying an inner toughness that others lean on."
            },
            {
                day: "Friday",
                maleName: "Kofi",
                femaleName: "Afua",
                description: "Friday carries associations with adventure and exploration. Kofi and Afua are often seen as free-spirited and curious, drawn to travel, new experiences, and a restless desire to see what's beyond the horizon."  
            },
            {
                day: "Saturday",
                maleName: "Kwame",
                femaleName: "Ama",
                description: "Saturday-born individuals are traditionally tied to strength and resilience, often described as having an old soul. Kwame and Ama are seen as wise beyond their years, disciplined, and carrying a quiet, enduring inner strength." 
            }
        ]

        const dayData = akanDays[d];

        if (gender !== "male" && gender !== "female") {
            return { name: null, description: "No valid gender value provided." };
        }
        
        const akanResultName = dayData[`${gender}Name`]; // Bracket notation instead of the dot notation
        
        return { name: akanResultName, description: dayData.description };
    }

    const akanFormResult = determineName(gender, dayOfTheWeek); // Storing the return of the objects in a variable to access them

    console.log(akanFormResult.name);

    formResult.textContent = akanFormResult.name;
    formDescription.textContent = akanFormResult.description;

    // Running the function twice to access the objects is inefficient, more effective to run the function once and store the objects in a variable for future access

})

// ------------------------------ INPUT ERROR EVENT HANDLER ------------------------------ \\

const inputsToValidate = akanForm.querySelectorAll("input");

inputsToValidate.forEach(function(input) {
    input.addEventListener('invalid', function(event) {
        event.preventDefault(); // Stops the native browser tooltip errors from appearing
        const errorMsg = input.closest(".form-section")?.nextElementSibling || input.nextElementSibling;
        errorMsg.style.display = "block";
    });

    input.addEventListener('input', function() {
        if (input.checkValidity()) {
            const errorMsg = input.closest(".form-section")?.nextElementSibling || input.nextElementSibling;
            errorMsg.style.display = "none";
        }
    });
});