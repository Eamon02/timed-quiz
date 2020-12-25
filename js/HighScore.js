const username = document.getElementById("username")
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore') || 0
const highScoresList = document.querySelector('#highScoresList')


//Gets info from local storage or returns
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

//max high score list length
const MAX_HIGH_SCORES = 5

//on click of save name, disables when empty 
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value
})

console.log(username.value)

//saves score 
saveHighScore = e => {
  e.preventDefault()

//puts elements onto array element 
  const score = {
    score: mostRecentScore,
    name: username.value
  }

  highScores.push(score)

  //sprts scores list
  console.log(highScores, "unsorted")
  highScores.sort((a,b) => {
    return b.score - a.score
  })

  console.log(highScores, "sorted")

  highScores.splice(5)

  localStorage.setItem('highScores', JSON.stringify(highScores))
  window.location.assign('index.html')
}

console.log(highScores, "unsorted")
highScores.sort((a,b) => {
  return b.score - a.score
})

console.log(highScores, "sorted")


highScoresList.innerHTML =
highScores.map(score => {
  return `<li class"high-score">${score.name} - ${score.score}</li>`
}).join('')