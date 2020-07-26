const process = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = form.elements.file.files[0];

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        process.value = e.loaded / e.total;
    });

    xhr.addEventListener('load', function () {
        if (this.status === 200) {
            console.log("success", this.status);
        } else {
            console.log("error", this.status);
        }
    })

    xhr.addEventListener('error', function () {
        console.log("error", this.status);
    });

    xhr.open("POST", "upload", true);
    xhr.send(file);
})