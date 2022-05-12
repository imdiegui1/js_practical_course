const list1 = [
    100,
    200,
    300,
    500,
];



function calculateAverage(list) {
    //let sumList =0;
//
    //for (let i = 0; i < list.length; i++) {
    //    sumList = sumList + list[i];
    //};

    const sumList = list. reduce(
        function (acumulateValue = 0, newElement) {
            return acumulateValue + newElement;
        }
    );

    const averageList = sumList/(list.length);

    return averageList;
}
