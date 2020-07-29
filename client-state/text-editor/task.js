const editor = document.getElementById('editor');

editor.value = localStorage.getItem('savedText');

editor.addEventListener('keyup', (e) => {
    localStorage.setItem('savedText', editor.value);
})