function evenPosition(arrayString) {
    let result = [];//creating new array named result - to put there the elements from the even positions there
    for (let i in arrayString) {
        if (i % 2 == 0) {
            result.push(arrayString[i]);
        }
    }
    console.log(result.join(" "));
}

evenPosition(['20', '30', '40']);


//2nd solution:
function evenCheck(arr) {
    let arrFiltered = [];
    arrFiltered = arr.filter((x, i)=>i % 2 == 0);//functional programming
    console.log(arrFiltered.join(" "));
}

evenCheck(['5', '10', '30', '77']);

//3rd solution:
(arrayEven) => arrayEven.filter((x, i)=>i % 2 == 0).join(" ");