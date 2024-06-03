// // Question 16

// let guestss : any = ["Amna", "Fatima", "Rabia"];

// console.log("Great news i found a bigger dinner table")


// // Adding more guests

// guestss.unshift("Saadia")
// guestss.push("Hania")
// guestss.splice(2,0,"Nabiha")

// for (let i = 0; i < guestss.length; i++) {
//     console.log(`Dear ${guestss[i]} would you like to join me for the dinner?`)
// }

// //Question 17

// console.log("Unfortunately, I can only invite two people for dinner.")

// while(guestss.length > 2){
//     let removedGuests = guestss.pop()
//     console.log(`Sorry ${removedGuests} I can't invite you to dinner`)
// }

// guestss.forEach((guest: any) => {
//     console.log(`Dear ${guest} you are still invited to dinner`)
// });

// guestss.splice(0,guestss.length)
// console.log(guestss)

// Question 18


// console.log(myFavouritePlace)

// //In Alphabetical order

// console.log([...myFavouritePlace].sort())

// //Original array

// console.log(myFavouritePlace)

// //Reverse Alphbetical Order

// console.log([...myFavouritePlace].sort().reverse())

// //Original array

// console.log(myFavouritePlace)

let myFavouritePlace : string[] = ["New Zealand", "Japan", "America", "Saudia Arabia", "South korea"]

myFavouritePlace.reverse()
console.log(myFavouritePlace)

myFavouritePlace.reverse()
console.log(myFavouritePlace)

myFavouritePlace.sort()
console.log(myFavouritePlace)

myFavouritePlace.reverse()
console.log(myFavouritePlace)



