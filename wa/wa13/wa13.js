// Problem 1
console.log("Problem 1:");
const employee1 = { //Unexpected 'const', why am I getting this error?
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
};
const employee2 = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
};

const employee3 = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
};

console.log(employee1);
console.log(employee2);
console.log(employee3);

// Problem 2
console.log("\nProblem 2:");
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [employee1, employee2, employee3 ]
};

console.log(company);

// Problem 3
console.log("\nProblem 3:");
const newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

// pushing the new employee to our previous employee array
company.employees.push(newEmployee);

console.log(company);

// Problem 4
console.log("\n Problem 4");
let totalSalary = 0;

company.employees.forEach(employee => {
    totalSalary += employee.salary;
});

console.log("Total Salary for all employees is", totalSalary);

// Problem 5 
console.log("\nProblem 5:");
function giveRaise(employee) {
    if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
}

company.employees.forEach(employee => {
    giveRaise(employee);
});

console.log(company);

//Problem 6
console.log("\n Problem 6");
const workFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
    employee.wfh = workFromHome.includes(employee.firstName);
});

console.log(company);