const list1 = [
    100,
    200,
    300,
    500,
];



function calculateAverage(list) {

    const sumList = list. reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );

    const averageList = sumList/(list.length);

    return averageList;
}
