let num=[3,1,3]
let t
let max=a[0]
let min=a[0]
for(let i=0;i<num.length;i++){
    for(let j=0;j<num.length;j++){
        if(num[i]<num[j]){
            t=num[i]
            num[i]=num[j]
            num[j]=t
        }
    }
}
console.log(num)
for(let k=0;k<num.length;k++){
    if(num[k]!=k+1){
        console.log("Missing num--->"+(k+1))
        break
    }
}