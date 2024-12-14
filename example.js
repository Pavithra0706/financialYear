const {
    getCurrentFinialYear,
    getCurrentAssesmentYear,
    getFinialYear,
    getAssesmentYear,
    listFinialYear,
    listFinialYearByYears,
    listAssesmentYear,
    listAssesmentFinialYear
} = require('./index');

// Test for getting the current financial year
console.log('Current Financial Year:', getCurrentFinialYear());

// Test for getting the current assessment year
console.log('Current Assessment Year:', getCurrentAssesmentYear());

// Test for getting the financial year for a given date
console.log('Financial Year for 05-07-2024:', getFinialYear('05-07-2024'));

// Test for getting the assessment year for a given date
console.log('Assessment Year for 05-07-2024:', getAssesmentYear('05-07-2024'));

// Test for listing financial years between two dates
console.log('Financial Years between 01-06-2024 and 28-08-2028:', listFinialYear('01-06-2024', '28-08-2028'));

// Test for listing financial years between two years
console.log('Financial Years between 2024 and 2028:', listFinialYearByYears('2024', '2028'));

// Test for listing assessment years between two dates
console.log('Assessment Years between 01-06-2024 and 28-08-2028:', listAssesmentYear('01-06-2024', '28-08-2028'));

// Test for listing assessment years between two financial years
console.log('Assessment Years between 2024 and 2028:', listAssesmentFinialYear('2024', '2028'));
