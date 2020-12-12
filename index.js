// Add your functions here
function map(array, fx){
  let arr=[]
  for(let i=0;i <array.length;i++){
    arr.push(fx(array[i]));
  }
  return arr;
}

/*function reduce(arr, fct, start){
 let r= (!!start) ? start : arr[0];
 let i= (!!start) ? 0 : 1;
 
 for ( i ; i< arr.length;i++){
    r = fct(arr[i], r)
 }
 
 return r;
}*/



