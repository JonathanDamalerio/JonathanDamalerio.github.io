
function check(){
    if (document.getElementById('newpass').value == document.getElementById('conpass').value) {
        var correct = document.getElementById('correct').value;
        var message = document.getElementById("Message")
        document.getElementById('Message').innerHTML = correct;
        message.style.opacity = 1
        message.style.color = "green"
    } else {
        var wrong = document.getElementById('wrong').value;
        var message = document.getElementById("Message")
        document.getElementById('Message').innerHTML = wrong;
        message.style.opacity = 1
        message.style.color = "red"
    }
}

