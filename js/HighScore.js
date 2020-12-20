// DOM elements and the variables they are tied to
const username = document.getElementById("username")
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScoresList = document.querySelector('#highScoresList')



const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value
})

console.log(username.value)

// Save high score function
saveHighScore = e => {
  e.preventDefault()

  // Score saved to high scores list is made up of the most recent score, and the user's initials
  const score = {
    score: mostRecentScore,
    name: username.value
  }

  // The five highest score games are saved on the page
  highScores.push(score)

  highScores.sort((a,b) => {
    return b.score - a.score
  })

  highScores.splice(5)

  // After the score is saved to local storage (after the save button is clicked), the page redirects to home
  localStorage.setItem('highScores', JSON.stringify(highScores))
  window.location.assign('index.html')
}

// plugging in High Scores
highScoresList.innerHTML =
highScores.map(score => {
  return `<li class"high-score">${score.name} - ${score.score}</li>`
}).join('')