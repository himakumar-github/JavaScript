function convertToCapital(str,len){
    let ch =""
    let newLineFound= false
    let res = " "
    for(let i=0;i<len;i++){
        ch = str[i]
        
        if(i==0){
            ch = ch.toUpperCase()
            res = res + ch
        }
        else{
        if( newLineFound  == true){
            ch = ch.toUpperCase()
            newLineFound = false;
        }// if
        else{
            ch=ch.toLowerCase()
            newLineFound=false
        }
        res = res + ch
        if(ch == "."){
            newLineFound = true
        }// if
    }
       
    }// for
    return res
}
let data = 
"It is very difficult to count."+
"this is Sample Data."+
"welcome to Hyderabad."+
"good Morning."+
"Java is beautifully language."

let conStr = convertToCapital(data,data.length)
console.log("Result Str------>"+conStr)