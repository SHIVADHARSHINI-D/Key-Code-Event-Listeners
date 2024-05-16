document.addEventListener('keydown', function(event) {
    document.querySelector('.landing-container').style.display = 'none';
    document.querySelector('.key-code-container').style.display = '';
    document.getElementById('keyCode').innerText = event.keyCode;
    document.getElementById('eventKey').innerText = event.key;
    document.getElementById('eventLocation').innerText = event.location === 3 ? 'Numpad' : 'General Keys';
    document.getElementById('eventCode').innerText = event.code;
    document.getElementById('eventWhich').innerText = event.which;
});