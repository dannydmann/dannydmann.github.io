const employees = [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  console.log("Problem 1");
  console.log(employees);
  
  const company = {
    name: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Problem 2");
  console.log(company);
  
  const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
  };
  
  company.employees.push(anna);
  
  console.log("Problem 3");
  console.log(company);
  
  let totalSalary = 0;
  for (let i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
  }
  
  console.log("Problem 4");
  console.log("Total salary: $" + totalSalary);
  
  for (let i = 0; i < company.employees.length; i++) {
    if (company.employees[i].raiseEligible) {
      company.employees[i].salary = company.employees[i].salary * 1.1;
      company.employees[i].raiseEligible = false;
    }
  }
  
  console.log("Problem 5");
  console.log(company);
  
  const workingFromHome = ["Anna", "Sam"];
  for (let i = 0; i < company.employees.length; i++) {
    if (workingFromHome.includes(company.employees[i].firstName)) {
      company.employees[i].wfh = true;
    } else {
      company.employees[i].wfh = false;
    }
  }
  
  console.log("Problem 6");
  console.log(company);