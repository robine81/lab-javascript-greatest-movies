// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(currentMovie => currentMovie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(theMovie => 
        { if (theMovie.director === 'Steven Spielberg' && theMovie.genre.includes('Drama'))
        {
            return theMovie.director 
        }})
    return spielbergMovies.length
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if(moviesArray.length === 0)
    {
        return 0
    }

    const totalScore = moviesArray.reduce(
        (accumulator, currentMovie) => {
            if(currentMovie.score)
            {            
                return accumulator + currentMovie.score
            } else {
                return accumulator
            }       
            }, 0)

            let averageScore =  totalScore / moviesArray.length
            return Number(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average score of Drama Movies
function dramaMoviesScore(moviesArray) {
    const theDrama = moviesArray.filter(theDrama => theDrama.genre.includes('Drama')) 
    if (!theDrama.length) {
        return 0
    }   

    let dramaAverage = scoresAverage(theDrama)

    // Option 2:
    // const dramaScore = theDrama.reduce(
    //     (accumulator, currentDrama) => { 
    //     if (currentDrama.score) {
    //     return accumulator + currentDrama.score
    //     } else {
    //         return accumulator
    //     }
    //     } ,0)

    //    let averageScore = dramaScore / theDrama.length 
    //    return Number(averageScore.toFixed(2));

    return dramaAverage
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copyArray = moviesArray.map(movie => movie) 

    const orderedYear = copyArray.sort((a,b)=>{
        if(a.year > b.year){
            return 1
        } else if (b.year > a.year) {
            return -1
        } else {
            if(a.title > b.title){
                return 1
            } 
            else if (b.title > a.title){
                return -1
            }
            else 
            {
                return 0
            }
        }
    }) 
    return orderedYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copyArray = moviesArray.map(currentTitles => currentTitles.title)

    const alphabeticalArray = copyArray.sort()
    return reducedArr = alphabeticalArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}