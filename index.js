// Helper function to format date into DD-MM-YYYY
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to determine if a given date is after March 31
function isAfterMarch31(date) {
    const march31 = new Date(date.getFullYear(), 2, 31); // March 31st
    return date >= march31;
}

// Function to get the current financial year
function getCurrentFinialYear() {
    const today = new Date();
    const startYear = isAfterMarch31(today) ? today.getFullYear() : today.getFullYear() - 1;
    return `${startYear}-${startYear + 1}`;
}

// Function to get the current assessment year
function getCurrentAssesmentYear() {
    const today = new Date();
    const startYear = isAfterMarch31(today) ? today.getFullYear() : today.getFullYear() - 1;
    return `${startYear + 1}-${startYear + 2}`;
}

// Function to get the financial year for a given date
function getFinialYear(dateStr) {
    const date = new Date(dateStr.split('-').reverse().join('-'));
    const startYear = isAfterMarch31(date) ? date.getFullYear() : date.getFullYear() - 1;
    return `${startYear}-${startYear + 1}`;
}

// Function to get the assessment year for a given date
function getAssesmentYear(dateStr) {
    const date = new Date(dateStr.split('-').reverse().join('-'));
    const startYear = isAfterMarch31(date) ? date.getFullYear() : date.getFullYear() - 1;
    return `${startYear + 1}-${startYear + 2}`;
}

// Function to list financial years between two dates
function listFinialYear(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr.split('-').reverse().join('-'));
    const endDate = new Date(endDateStr.split('-').reverse().join('-'));

    const startYear = isAfterMarch31(startDate) ? startDate.getFullYear() : startDate.getFullYear() - 1;
    const endYear = isAfterMarch31(endDate) ? endDate.getFullYear() : endDate.getFullYear() - 1;

    let years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(`${year}-${year + 1}`);
    }
    return years;
}

// Function to list financial years between two years
function listFinialYearByYears(startYear, endYear) {
    let years = [];
    for (let year = parseInt(startYear); year <= parseInt(endYear); year++) {
        years.push(`${year}-${year + 1}`);
    }
    return years;
}

// Function to list assessment years between two dates
function listAssesmentYear(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr.split('-').reverse().join('-'));
    const endDate = new Date(endDateStr.split('-').reverse().join('-'));

    const startYear = isAfterMarch31(startDate) ? startDate.getFullYear() : startDate.getFullYear() - 1;
    const endYear = isAfterMarch31(endDate) ? endDate.getFullYear() : endDate.getFullYear() - 1;

    let years = [];
    for (let year = startYear + 1; year <= endYear + 1; year++) {
        years.push(`${year}-${year + 1}`);
    }
    return years;
}

// Function to list assessment years between two financial years
function listAssesmentFinialYear(startYear, endYear) {
    let years = [];
    for (let year = parseInt(startYear) + 1; year <= parseInt(endYear) + 1; year++) {
        years.push(`${year}-${year + 1}`);
    }
    return years;
}

module.exports = {
    getCurrentFinialYear,
    getCurrentAssesmentYear,
    getFinialYear,
    getAssesmentYear,
    listFinialYear,
    listFinialYearByYears,
    listAssesmentYear,
    listAssesmentFinialYear
};
