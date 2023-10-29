let a=[1,2,3,4,5,6,7,8]
let b=[8,5,2,6,9]
let subset=true
let gotValue=false

for(let i=0;i<b.length;i++){
    for(let j=0;j<a.length;j++){
    if(b[i]==a[j])gotValue=true;
    }
    if(gotValue==false){
    subset=false
    break
    }
     gotValue=false
}
    if(subset==true)
    console.log("Yes this is subset")
    else{
    console.log("No this is not a subset")
    }