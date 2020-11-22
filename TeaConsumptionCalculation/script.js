var maxAge;

function teaConsumption(age, amountPerDay) {
  var age;
  var amountPerDay;
  maxAge = 80;

  var total = maxAge - age;
  return total * 360 * amountPerDay;
}

document.write("<br>");
document.write(
  "You will need " +
    teaConsumption(35, 3) +
    " cups of tea to last until the ripe age of " +
    maxAge
);
document.write("<br>");
document.write(
  "You will need " +
    teaConsumption(44, 1) +
    " cups of tea to last until the ripe age of " +
    maxAge
);
document.write("<br>");
document.write(
  "You will need " +
    teaConsumption(20, 3) +
    " cups of tea to last until the ripe age of " +
    maxAge
);
