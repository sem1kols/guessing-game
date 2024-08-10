// game.js

document.getElementById('guess-button').addEventListener('click', function() {
    const number = Number(document.getElementById('guess-input').value);
    const randomNumber = Math.ceil(Math.random() * 10);

    if (number === randomNumber) {
        document.getElementById('result').textContent = "You won!";
    } else {
        document.getElementById('result').textContent = `You guessed ${number}, but the right number was ${randomNumber}. The game will close in 3 seconds.`;
        
        // Redirect to a blank page after 3 seconds
        setTimeout(function() {
            window.location.href = "about:blank";
        }, 3000);
    }
});
