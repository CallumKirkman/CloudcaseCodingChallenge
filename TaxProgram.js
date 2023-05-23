// Noted potential for rounding errors
// if used on a larger commercial scale, use of currency specific variables would be employed to avoid complex rounding errors

function calculateTax(income) {
  let tax;

  if (income < 18201) {
    // console.log("Less than tax");
    tax = 0;
  } else if (income >= 18201 && income <= 37000) {
    // console.log("Lower tax");
    tax = (income - 18200) * 0.19;
  } else if (income >= 37001 && income <= 90000) {
    // console.log("Middle tax");
    tax = 3572 + (income - 37000) * 0.325;
  } else if (income >= 90001 && income <= 180000) {
    // console.log("Higher tax");
    tax = 20797 + (income - 90000) * 0.37;
  } else {
    // console.log("Highest tax");
    tax = 54097 + (income - 180000) * 0.45;
  }

  return tax.toFixed(2);
}

// Calculate annual tax
function calculateAnnualTax(salary) {
  const tax = calculateTax(salary);
  if (tax > 0) {
    console.log(`Salary tax is: $${tax}`);
  } else {
    console.log("Salary under tax range");
  }
}

// Variable for calculations
let superRate = 0.105; // Assumed current superannuation rate

// Calculate annual superannuation
function calculateSuper(salary) {
  // Super is assumed calculated before tax
  let annualSuper = salary * superRate;
  console.log(`Annual Superannuation: $${annualSuper}`);
}

// Test case for negative income
console.log(calculateTax(-5000));
// Output: tax = 0

// Test case for non-numeric input
console.log(calculateTax("not a number"));
// Output: tax = NaN

// Test case for minimum income
console.log(calculateTax(0));
// Output: tax = 0

// Test case for income between 0 and 18200
console.log(calculateTax(10000));
// Output: tax = 0

// Test case for income between 18201 and 37000
console.log(calculateTax(20000));
// Output: tax = 342.00

// Test case for income between 37001 and 90000
console.log(calculateTax(50000));
// Output: tax = 7797.00

// Test case for income between 90001 and 180000
console.log(calculateTax(120000));
// Output: tax = 31897.00

// Test case for income greater than 180000
console.log(calculateTax(200000));
// Output: tax = 63097.00

// Test case for no tax payable
calculateAnnualTax(10000);
// Output: Salary under tax range

// Test case for tax payable
calculateAnnualTax(50000);
// Output: Salary tax is: $7797.00

// Test case for annual superannuation calculation
calculateSuper(50000);
// Output: Annual Superannuation: $5250.00

// Test case for different super rate
(superRate = 0.12), calculateSuper(50000);
// Output: Annual Superannuation: $6000.00
