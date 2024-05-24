const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No one is winner");
    }
};
console.log("Data 1: Dolphins score 44,23,and 71.Koalas score 65,54,and 49");
checkWinner(avgDolphins1, avgKoalas1);
console.log("Data 2: Dolphins score 85,54,and 41.Koalas score 23,34,and 27");
checkWinner(avgDolphins2, avgKoalas2);