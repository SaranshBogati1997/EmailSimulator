//variables
const To = document.getElementById('To');
const Subject = document.getElementById('Subject');
const Message = document.getElementById('Message');
const sendBtn = document.getElementById('sendBtn');
const resetBtn = document.getElementById('resetBtn');
const spinner = document.querySelector('#spinner');
var ready;

setInterval(validation, 2000);
//event listeners
eventListeners();

function eventListeners() {
    console.log('working...');
    sendBtn.addEventListener('click', sendEmail);
    resetBtn.addEventListener('click', resetAll);
    document.addEventListener('DOMContentLoaded', disable);
}

//functions

function validation() {
    if (To.value != '' && Subject.value != '' && Message.value != '' && ready == true) {
        sendBtn.disabled = false;
    }
    else{
        sendBtn.disabled = true;
    }
    if(To.value.includes('@')){
        ready = true;
    }else{
        ready = false;
    }
}

function disable() {
    sendBtn.disabled = true;
}
function resetAll() {
    To.value = '';
    Subject.value = '';
    Message.value = '';
}

function sendEmail() {
    spinner.style.display = 'block';
    setTimeout(stopGif, 2000);
    setTimeout(showSuccess, 2000);
}

function stopGif() {
    spinner.style.display = 'none';
    document.getElementById('success').style.display = 'none';

}
function showSuccess() {
    document.getElementById('success').style.display = 'block';
    setTimeout(stopGif, 1000);
    setTimeout(sent, 1000);

}

function sent() {
    Subject.value = '';
    To.value = '';
    Message.value = '';
}