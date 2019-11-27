function insertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
          let current = arr[i];
          for(var j=i-1; j >= 0 && arr[j] > current;j--) {
              arr[j + 1] = arr[j] 
          }
          arr[j + 1] = current;
      }
  console.log(arr)
}
arr=[34,32,3,545,6,1]
insertionSort(arr)