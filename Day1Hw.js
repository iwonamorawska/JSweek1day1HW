//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
//let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
//let dog_names = ["Max","HAS","PuRple","dog"];
//
function findWords(dog_string,dog_names) {
    for(let i=0;i < dog_names.length; i++){
        console.log(dog_names[i]);
        if (dog_string.search(dog_names[i])){
            return "Matched dog_name";
        }else{
            return "No matches found" ;
        }
    }
}
console.log(findWords(dog_string,dog_names))




//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0;i < arr.length; i++){
        if(i%2==0){
            arr.splice(i,1,'even index')
        }
    } 
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Write function bmi that calculates body mass index (bmi = weight / height2).
//if bmi <= 18.5 return "Underweight"
//if bmi <= 25.0 return "Normal"
//if bmi <= 30.0 return "Overweight"
//if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
      case bmi <= 18.5:
        return "Underweight";
      case bmi <= 25.0:
        return "Normal";
      case bmi <= 30.0:
        return "Overweight";
      case bmi > 30:
        return "Obese";
     }
   }
console.log(bmi(weight,height))

//Your classmates asked you to copy some paperwork for them. 
//You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. 
//If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if(n<=0, m<=0){
      return 0
    }else {
      return n*m
    }
  }
console.log(paperwork(n,m))
