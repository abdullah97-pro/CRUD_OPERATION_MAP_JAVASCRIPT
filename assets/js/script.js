// function to insert data
function insertData() {
    // get form values
    var title = document.getElementById('titleInput').value;
    var paragraph = document.getElementById('paragraphInput').value;
    var image = document.getElementById('imageInput').files[0];

    // create object with form data
    var newData = {
        title : title,
        paragraph : paragraph,
        // create url for the upload image
        imageUrl : URL.createObjectURL(image)
    }

    // get existing data from localStorage or initialize empty array
    var storedData = JSON.parse(localStorage.getItem('formDataMap')) || [];

    // add new data to the Array
    storedData.push(newData);

    // Save Data to localStorage
    localStorage.setItem('formDataMap',JSON.stringify(storedData));

    // clear form fileds
    document.getElementById('myForm').reset();
}
