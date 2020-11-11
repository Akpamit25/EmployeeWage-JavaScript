const is_fulltime = 2;
const is_parttime = 1;
const part_time_hours = 4;
const full_time_hours = 8;
const wage_per_hour = 20;
const monthly_working_days = 20;
const max_working_hours = 160;

let empHour = 0;
let totalWage = 0;
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let totalEmployeeWage = 0
//let dailyEmployeeWage = 0;
let dailyWageArray = new Array();
let totEmpWage = 0;
let dailyEmpWageMap = new Map();
let dailyEmpHourMap = new Map();


while (totalWorkingDays < monthly_working_days && totalEmployeeHours < max_working_hours) {
    empStatus = Math.floor(Math.random() * 10) % 3;
    empHour = getWorkingHours(empStatus);

    console.log("Day " + (totalWorkingDays + 1) + " Employee Hours =" + empHour);
    //dailyEmployeeWage = empHour * wage_per_hour;
    //dailyWageArray.push(    dailyEmployeeWage.toString());
    dailyWageArray.push(calculateWage(empHour));
    dailyEmpWageMap.set(totalWorkingDays,calculateWage(empHour) );
    dailyEmpHourMap.set(totalWorkingDays, empHour);

    totalEmployeeHours += empHour;
    totalWorkingDays++;

}
totalEmployeeWage = calculateWage(totalEmployeeHours);

console.log("No. Of total Working Days In the Month = " + totalWorkingDays);
console.log("Monthly Wage =" + totalEmployeeWage);
console.log("Monthly Working Hours = " + totalEmployeeHours);
console.log("Day wise Employee Wages = " + dailyWageArray);

function getWorkingHours(empStatus) {
    switch (empStatus) {
        case is_parttime:
            return part_time_hours;

        case is_fulltime:
            return full_time_hours;

        default:
            return 0;

    }
}
//Array Helper Functions

//UC : 7-A -> Using Reduce & forEach
function calculateWage(empHour) {
    return empHour * wage_per_hour;
}

dailyWageArray.forEach(sum);
console.log("//////////////////");
console.log("Total Employee Wage Using forEach = " + totEmpWage);

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

function totalWages1(totalWage1, dailyWage1) {
    return totalWage1 + dailyWage1;
}

console.log("Calculating Total Wage Using Reduce Method = " + dailyWageArray.reduce(totalWages1, 0));

//UC : 7-B Show the day along with the daily wage using Array Map Helper Function
let dailyCntr = 0;
function mapDayWithWage(dailyWage2) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage2;
}

let mapDayWithWageArr = dailyWageArray.map(mapDayWithWage);
console.log("UC 7B : Daily Wage Map"+mapDayWithWageArr);

//UC 7-C -> Show days when full time wage og 160 was earned
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7-C : Using filter method to find out when full day wages was recieved " + fullDayWageArr);
//console.log(fullDayWageArr1);

function fulltimeWage(dailyWage3) {
    return dailyWage3.includes("160");
}

//UC 7-D : Finding first occurence of full time wage
let firstfulltimeArr = mapDayWithWageArr.find(firstfulltimeWage);
console.log("UC 7-D : Finding first occurence of full time wage : " + firstfulltimeArr);


function firstfulltimeWage(dailyWage4) {
    return dailyWage4.includes("160");
}

//UC 7-E : Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage5){
    return dailyWage5.includes("160");
}

console.log("UC 6E : Check all Element have full time wage : "+fullDayWageArr.every(isAllFulltimeWage));

//UC 7-F : Check If there is any part time wage
function isAnyPartTimeWage(dailyWage6){
    return dailyWage6.includes("80");
}

console.log("UC 7F : Check if any part time wage : "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7-G : Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage7){
    if(dailyWage7 > 0)
    return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G : Number Of Days Emp Worked :"+ dailyWageArray.reduce(totalDaysWorked,0));

// UC8 : Store the Day and the Daily Wage along with the Total Wage (Using Map)

function totalEmployeeMap(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("Employee Wage Map : ");
console.log(dailyEmpWageMap);
console.log("UC 8a - Total Employee Wage (Using Map) : " + Array.from(dailyEmpWageMap.values()).reduce(totalEmployeeMap, 0));

console.log("Employee Wage Hours : ");
console.log(dailyEmpHourMap);
console.log("UC 8b - Total Employee Hours (Using Map) : " + Array.from(dailyEmpHourMap.values()).reduce(totalEmployeeMap, 0));
