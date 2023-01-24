////link the elements

const highScoresStorage = document.querySelector("#highscores");
const ClrScoresBtn = document.querySelector("#clear");


// Score State Function — Retrieves scores and populates page
function showScore() {
    // Resets scoreList
    scoreList.innerHTML = null;
    // Retrieve scores from local storage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    // Sort scores from highest to lowest
    highscores.sort((a, b) => b.score - a.score);
    // Score populate the scoreboard
    highscores.forEach((score) => {
        const scoreLi = document.createElement('li');
        scoreLi.innerHTML = score.user.toUpperCase() + " — " + score.score;
        scoreList.append(scoreLi);
    });
};