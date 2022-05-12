const rowList = [
    4000000,
    100,
    300,
    200,
];

//median requires to have sorted values before being calculated
list1 = rowList.sort();


const middleValue = parseInt(list1.length / 2)

let median;

function calculateAverage(list) {

    const sumList = list. reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );

    const averageList = sumList/(list.length);

    return averageList;
}


function isEven (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

if (isEven(list1.length)) {
    const element1 = list1[middleValue - 1];
    const element2 = list1[middleValue];

    const average = calculateAverage([element1, element2])

    console.log(average)


}
else {
    median = list1[middleValue];
    console.log(median);
}