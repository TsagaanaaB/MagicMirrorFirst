document.addEventListener('DOMContentLoaded', function () {
    const showPictureButton = document.getElementById('showPictureButton');
    const closePictureButton = document.getElementById('closePictureButton');
    const magicImage = document.getElementById('magicImage');

    closePictureButton.style.display = 'none'; // Initially hide the "Close Picture" button

    showPictureButton.addEventListener('click', function () {
        magicImage.src = 'pikachu.jpg'; // Adjust the path accordingly
        magicImage.style.display = 'block'; // Show the image
        closePictureButton.style.display = 'block'; // Show the "Close Picture" button
        showPictureButton.style.display = 'none'; // Hide the "Show Picture" button
    });

    closePictureButton.addEventListener('click', function () {
        magicImage.style.display = 'none'; // Hide the image
        closePictureButton.style.display = 'none'; // Hide the "Close Picture" button
        showPictureButton.style.display = 'block'; // Show the "Show Picture" button
    });
});
