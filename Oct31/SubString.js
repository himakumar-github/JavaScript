let data = "It is very difficult to count. This is Sample Data.Welcome to Hyderabad. Good Morning. Java is beautifully language."
let splitStr = data.split(".")
console.log(splitStr)
let maxWord = splitStr[0]
let eachWord
let count 
for(let i=1;i<splitStr.length;i++){
   eachWord= splitStr[i]
    if(eachWord.length > maxWord.length){
        maxWord = eachWord
    }
}
console.log("Max Word--->"+maxWord)
console.log("total number of chars of MAx Word--->"+maxWord.length)
console.log("Total Words---->"+splitStr.length)

let s=data.split(".")
console.log(s)

