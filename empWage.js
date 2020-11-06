const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const NO_OF_WRK_DAYS = 20;
const MAX_WRK_HRS = 160;


function getWorkHRs(empCheck)
{
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HRS;

    case IS_FULL_TIME:
        return FULL_TIME_HRS;

    default:
        return 0;
}
}

function calculateDailyWage(empHrs)
{
    return empHRS * WAGE_PER_HR;
}
let empHRS = 0,empWage = 0,empCheck = 0,days=0;
let empDailyWageArray = new Array();

while(days<=NO_OF_WRK_DAYS && empHRS<=MAX_WRK_HRS)
{
days++;
empCheck = Math.floor(Math.random() * 10) % 3;
empHRS += getWorkHRs(empCheck);
empDailyWageArray.push(calculateDailyWage(empHRS));
}
empWage = calculateDailyWage(empHRS);
console.log("Wage = "+empWage+" WorkHrs = "+empHRS);