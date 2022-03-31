enum StarbucksGrade {
  welcome,
  green,
  gold,
}

function getDiscount(v: StarbucksGrade): number {
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
