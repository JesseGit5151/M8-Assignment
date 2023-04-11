//STEP 1
// let myMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump"];
// console.log(myMovies[1])
//STEP 2
// let movies = new Array(5)
// movies[0] = "The Shawshank Redemption";
// movies[1] = "The Godfather";
// movies[2] = "The Dark Knight";
// movies[3] = "Pulp Fiction";
// movies[4] = "Forrest Gump";
// console.log(movies[0])
//STEP 3
// let movies = new Array(5)
// movies[0] = "The Shawshank Redemption";
// movies[1] = "The Godfather";
// movies[2] = "The Dark Knight";
// movies[3] = "Pulp Fiction";
// movies[4] = "Forrest Gump";
// movies.splice(2, 0, "Inception"); 
// console.log(movies.length);

//STEP 4
// let movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump"];
// delete movies[0] 
// console.log(movies)
//STEP 5
// let movies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"];
// for (let movie in movies) {
//     console.log(movies[movie])
// }
//STEP 6
// let movies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"];
// for (const i of movies) {
//     console.log(i)
// }
//STEP 7
// let movies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"].sort()
// for (const i of movies) {
//     console.log(i)
// }
//STEP 8
// let movies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"]
// let leastFavMovies = ["Catwoman", "Gigli", "Disaster Movie", "Jack and Jill", "The Room"]
// console.log("Movies I like:")
// console.log(" ")
// for (const movie of movies) {
//     console.log(movie)
// }
// console.log(" ")
// console.log("Movies I regret watching:")
// console.log(" ")
// for (const movie of leastFavMovies) {
//     console.log(movie)
// }
//STEP 9
// let favMovies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"]
// let leastFavMovies = ["Catwoman", "Gigli", "Disaster Movie", "Jack and Jill", "The Room"]
// let movies = favMovies.concat(leastFavMovies).reverse().sort()
// console.log(movies)
//STEP 10
// let favMovies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"]
// let leastFavMovies = ["Catwoman", "Gigli", "Disaster Movie", "Jack and Jill", "The Room"]
// let movies = favMovies.concat(leastFavMovies).reverse().sort()
// movies = movies.pop()
// console.log(movies)
//STEP 11
// let favMovies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"]
// let leastFavMovies = ["Catwoman", "Gigli", "Disaster Movie", "Jack and Jill", "The Room"]
// let movies = favMovies.concat(leastFavMovies).reverse().sort()
// movies = movies.shift()
// console.log(movies)
//STEP 12
// let favMovies = ["The Shawshank Redemption", "Inception", "The Godfather", "The Dark Knight", "Pulp Fiction", "Forrest Gump", "Lion King"]
// let leastFavMovies = ["Catwoman", "Gigli", "Disaster Movie", "Jack and Jill", "The Room"]
// let movies = favMovies.concat(leastFavMovies)
// movies.splice(7, 5, "star wars", "day of the dead", "2012")
// console.log(movies)
//STEP 13
// let movies = [["The Shawshank Redemption", 1], ["Inception", 2], ["The Godfather", 3], ["The Dark Knight", 4], ["Forrest Gump", 5]];
// console.log(movies[0])
// let movieNames = movies.filter((item) => {
//     return typeof item[0] === "string"
// }).map(item => item[0]);
// console.log(movieNames)
//STEP 14
// let employees = ["John", "Mary", "David", "Sarah", "Paul"];
// let showEmployee = function(employeeArr) {
//     console.log('Employees:')
//     console.log('')
//     employeeArr.forEach(element => {
//         console.log(element)
//     });
// }
// showEmployee(employees)
//STEP 15
// let filterValues = (arr) => {
//     return arr.filter(value => value);
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
//STEP 16
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let randomPicker = function(arr) {
//     let randomNumber = Math.floor(Math.random() * 10);
//     return arr[randomNumber]
// }
// console.log(randomPicker(numbers))
//STEP 17
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 66, 77];
let max = function(arr) {
    return Math.max(...arr);
}
console.log(max(numbers))