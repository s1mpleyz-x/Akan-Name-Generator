const akanForm = document.getElementById("generator-form");

akanForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stops the page from reloading

    const formData = new FormData(akanForm); // Fetches data from the form

    const day = formData.get('day');
    const month = formData.get('month');
    const year = formData.get('year');
    const gender = formData.get('gender');


})