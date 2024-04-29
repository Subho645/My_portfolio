// script.js

document.getElementById('download-cv-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'Resume_Up.pdf.pdf'; // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    link.download = 'Resume_Up.pdf.pdf'; // Replace 'your_cv_file_name.pdf' with the desired name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
