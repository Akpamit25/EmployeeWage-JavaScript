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

function calculateDailyWage(hrs)
{
    return hrs * WAGE_PER_HR;
}
let empHRS = 0,empWage = 0,empCheck = 0,days=1;
let empDailyWageArray = new Array();
let totalEmpHrs = 0;
let totalWage = 0;
let empDailyWageMap = new Map();

while(days<=NO_OF_WRK_DAYS && empHRS<=MAX_WRK_HRS)
{
empCheck = Math.floor(Math.random() * 10) % 3;
empHRS = getWorkHRs(empCheck);
totalEmpHrs += empHRS;
empDailyWageArray.push(calculateDailyWage(empHRS));
empDailyWageMap.set(days,calculateDailyWage(empHRS));
days++;
}

function calculateTotalWage(dailyWage)
{
     totalWage += dailyWage; 
}
empDailyWageArray.forEach(calculateTotalWage);
console.log("Wage = "+totalWage+" WorkHrs = "+totalEmpHrs);

function totalWageReduce(totalWages,wage)
{
    return wage+totalWages;
}
console.log("Wage = "+empDailyWageArray.reduce(totalWageReduce,0)+" WorkHrs = "+totalEmpHrs);

let dayCount = 0;
function showDayWithWage(wage)
{
    dayCount++;
    return dayCount+" -> "+wage;
}
let dayWithWage = empDailyWageArray.map(showDayWithWage);
console.log(dayWithWage);

function showDayWithFullTime(wage)
{
    return wage.includes("160");
}
let daysWithFullTime = dayWithWage.filter(showDayWithFullTime);
console.log(daysWithFullTime);

function firstFulltime(wage)
{
    return wage.includes("160");
}
let firstDayFullTime = dayWithWage.find(showDayWithFullTime);
console.log(firstDayFullTime);

function checkFullTime(wage)
{
    return wage.includes("160");
}
console.log(dayWithWage.every(checkFullTime));

function checkPartTime(wage)
{
    return wage.includes("80");
}
console.log(dayWithWage.some(checkPartTime));

function totalDaysWorked(totalDays,dailyWage)
{
    if(dailyWage>0)
    totalDays++;
    return totalDays;
}
let daysTotal = empDailyWageArray.reduce(totalDaysWorked,0);
console.log("Total Days Worked = "+daysTotal);

function totalWageCalculate(totalwage,wage)
{
    return totalwage+wage;
}

console.log("Total wage = "+Array.from(empDailyWageMap.values()).reduce(totalWageCalculate,0));