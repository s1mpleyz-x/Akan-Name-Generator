const akanForm = document.getElementById("generator-form");

akanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from reloading

    const day = document.getElementById('dob');
    const month = document.getElementById('mob');
    const year = document.getElementById('yob');

    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : null;

})