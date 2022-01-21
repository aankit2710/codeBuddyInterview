// level {1/2/3}

const fabonacciSum = (n) => {

    var series = [0, 1];
    var sum = 1;
    var seriesSum = 1;

    if (n == 1) {
        console.log(0, 1)
        return 0;
    }

    else if (n == 2) {
        console.log(series)
        return 1;
    }
    else {
        for (i = 2; i < n; i++) {

            sum = series[i-1]+ series[i-2];
            seriesSum = seriesSum + sum;
            series.push(sum);

        }
        console.log(series);
        return seriesSum;
    }


}

sum = fabonacciSum(7);
console.log(sum)