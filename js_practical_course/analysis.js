//Helper functions
function isEven (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function calculateAverage(list) {

    const sumList = list. reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );

    const averageList = sumList/(list.length);

    return averageList;
}

// Average calculator
function medianSalary(list) {
    const middle = parseInt(list.length / 2);

    if (isEven(list.length)) {
        const middlePerson1 = list[middle-1];
        const middlePerson2 = list[middle];

        const median = calculateAverage([middlePerson1, middlePerson2]);
        return median

    } else {
        const middlePerson = list[middle];
        return middlePerson
    }
}

//General Average
const salaryCol = colombia.map(
    function(person){
        return person.salary;
    }
);

const salaryColSort = salaryCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

//top10% average
const spliceStart = (salaryColSort.length * 90) / 100;
const spliceCount = salaryColSort.length - spliceStart;

const salaryColTop10 = salaryColSort.splice(
    spliceStart,
    spliceCount
);

const generalMediaCol = medianSalary(salaryColSort);

console.log({
    generalMediaCol,
    salaryColTop10
})