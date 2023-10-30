let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
  ]
  let rsum=[0,0,0,0,0]
  for(let r=0;r<5;r++){
    for(let c=0;c<5;c++){
        if(r==0){
            rsum[r]=rsum[r]+matrix[r][c]
        }
        if(r==4){
            rsum[r]=rsum[r]+matrix[r][c]
        }
    }
        if(r==0){
            console.log("Row "+(r+1)+" Sum--->"+rsum[r])
        }
        if(r==4){
            console.log("Row "+(r+1)+" Sum--->"+rsum[r])
        }
    }
    for(let c=0;c<5;c++){
        for(let r=0;r<5;r++){
            if(c==0){
                rsum[c]=rsum[r]+matrix[c][r]
            }
            if(c==4){
                rsum[c]=rsum[r]+matrix[c][r]
            }
        }
        if(c==0){
            console.log("Column "+(c+1)+" Sum--->"+rsum[c])
        }
        if(c==4){
            console.log("Column "+(c+1)+" Sum--->"+rsum[c])
        }
    }