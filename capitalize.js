// forEach();

let arr = ['jamie', 'chigozie', 'ohakwe']

arr.forEach(capitalize)
// console.log(arr[0])

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
    console.log(arr[index])
}