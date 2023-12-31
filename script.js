
function my(answer) {
    var answerBox = document.getElementById(answer);

    // Toggle the display property
    answerBox.style.display = (answerBox.style.display === 'none' || answerBox.style.display === '') ? 'block' : 'none';
}
