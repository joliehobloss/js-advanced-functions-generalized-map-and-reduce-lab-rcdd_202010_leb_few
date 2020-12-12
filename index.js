// Add your functions here
function map(array, fx){
  let arr=[]
  for(let i=0;i <array.length;i++){
    arr.push(fx(array[i]));
  }
  return arr;
}

function reduce(array, fx, start){
 let a= (!!start) ? start : array[0];
 //let i= (!!start) ? 0 : 1;
 
 for (let i=0 ; i< array.length;i++){
    a = fx(array[i], a)
 }
 
 return a;
}



