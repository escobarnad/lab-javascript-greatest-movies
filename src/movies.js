// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newMoviesArr = [...moviesArray]
    let uniqueDirector = []
    newMoviesArr.map((movie) => {
        uniqueDirector.push(movie.director)
    })
    return uniqueDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newMoviesArr = [...moviesArray]
    const dramaSpil = newMoviesArr.filter((movies)=> {
       return movies.director === 'Steven Spielberg' && movies.genre.includes("Drama")
    })
    return dramaSpil.length
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
    const newMoviesArr = [...moviesArray]
    const drama = newMoviesArr.filter((movies)=> {
       return movies.genre.includes("Drama")
    })
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArr = [...moviesArray]
    const sortedMovies = newMoviesArr.sort((a, b) => {
        if (a.year !== b.year){
            return a.year - b.year
        }
        // if (a.year < b.year){
        //     return -1
        // } else if (a.year > b.year){
        //     return 1
        // } 
        else {
            return a.title.localeCompare(b.title)
        }
    })
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArr = moviesArray.map((movie)=>{
        return movie.title
    })
    const sortedMovies = newMoviesArr.sort((a, b)=> {
        if (a < b){
            return -1
        } else if (a > b){
            return 1
        } 
        else {
            return 0
        }
    })
    if (sortedMovies.length > 20){

        return sortedMovies.splice(0, 20)
    }
    return sortedMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArr = JSON.parse(JSON.stringify(moviesArray))
    const timeArr = moviesArray.map((movie)=>{
        let hours = movie.duration[0].split("h")
        let minOut = movie.duration.split("min")
        let hsOut = minOut[0].split(" ")
        console.log(hsOut)
        if (!hsOut[1]){
            return parseInt(hours) * 60
        } else {
            return parseInt(hours) * 60 + parseInt(hsOut[1])
        }
        })

    newMoviesArr.forEach((movie, index) => {
        if(index<timeArr.length){
            movie.duration = timeArr[index]
        }
    })
        
    console.log(newMoviesArr)
    return newMoviesArr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}