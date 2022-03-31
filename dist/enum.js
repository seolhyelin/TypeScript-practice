var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["welcome"] = 0] = "welcome";
    StarbucksGrade[StarbucksGrade["green"] = 1] = "green";
    StarbucksGrade[StarbucksGrade["gold"] = 2] = "gold";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
    switch (v) {
        case StarbucksGrade.welcome:
            return 0;
        case StarbucksGrade.green:
            return 5;
        case StarbucksGrade.gold:
            return 10;
    }
}
console.log(getDiscount(StarbucksGrade.green));
console.log(StarbucksGrade.green);
//# sourceMappingURL=enum.js.map