//câu 1
function findEven(number) {
    var arr = ('' + Array(20)).split(',').map(function() { return this[0]++; }, [4]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            document.writeln(arr[i] + "<br />");
        }
    }
}
findEven()

//câu 2
function numberOneTriangle() {
    var i, j;
    for (i = 0; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            console.log("1");
        }
    }
}
numberOneTriangle()