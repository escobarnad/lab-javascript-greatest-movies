// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((oneMovie) => {
        return oneMovie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray

    .filter((currentMovie) => currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama"))
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    const bestMovie = moviesArray
    .filter((currentMovie) => typeof currentMovie.score === "number")
    const sumScore = bestMovie
    .reduce ((accumulator, currentBestMovie) => accumulator + currentBestMovie.score, 0)
    const roundNum = sumScore/moviesArray.length
    return parseFloat(roundNum.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const bestMovie = moviesArray
    .filter((currentMovie) => typeof currentMovie.score === "number" && currentMovie.genre.includes("Drama"))
    const sumScore = bestMovie
    .reduce ((accumulator, currentBestMovie) => accumulator + currentBestMovie.score, 0)
    const roundNum = sumScore/bestMovie.length
    if (bestMovie.length === 0){
        return 0
    }
    return parseFloat(roundNum.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = moviesArray.map((currentElement) => {
        return currentElement
    })
    newArray.sort((a, b) => {
        if (a.year !== b.year){
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title)
        }
    })
    return newArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray.map((currentElement) => {
        return currentElement.title
    })

    const shortArraySorted = newArray.sort((a, b) =>{
        if (a<b) {return -1}
        if (a>b) {return 1}
        return 0
    })

    if (shortArraySorted.length > 20){
        return shortArraySorted.splice(0, 20)
    }
    return shortArraySorted
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
