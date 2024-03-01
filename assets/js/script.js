// function to insert data
function insertData() {
    try {
        // get form values
        var title = document.getElementById('titleInput').value;
        var paragraph = document.getElementById('paragraphInput').value;
        var image = document.getElementById('imageInput').files[0];

        // Create object with form data
        var newData = {
            title : title,
            paragraph : paragraph,
            // Create url for the upload image
            imageUrl : URL.createObjectURL(image)
        }

        // Get existing Data from localStorage or initialize empty Array
        var storedData = JSON.parse(localStorage.getItem('formDataMap')) || [];

        // Add new Data to the Array
        storedData.push(newData);

        // Save Data to localStorage
        localStorage.setItem('formDataMap',JSON.stringify(storedData));

        // Clear form fileds
        document.getElementById('myForm').reset();
    } catch (error) {
        console.error("Error has been detected.",error);
        alert("Error has been detected.",error);
    }
}

// Function to read Data
function readData() {
    // Retrive data from localStorage or initialize empty array
    var storedData = JSON.parse(localStorage.getItem('formDataMap')) || [];

    // Display data
    var displayContainer = document.getElementById('dataDisplay');
    displayContainer.innerHTML = '';

    
}