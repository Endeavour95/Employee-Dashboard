// let submitButton = document.getElementById("sub");
// submitButton.addEventListener("submit", (e) => {
//     e.preventDefault();
//     storeEmployeeDetails();
// });

function storeEmployeeDetails() {
    // let submitButton = document.getElementById("sub");
    // let labels = ["Enter First Name", "Enter Last Name", "Enter Salary", "Enter Designation"];

    // submitButton.addEventListener("submit", (e) => {
    // e.preventDefault();

    let values = [];

    // let fName = document.getElementById("EnterFirstName").value;
    // values.push(fName);

    // let lName = document.getElementById("EnterLastName").value;
    // values.push(lName);

    // let salary = document.getElementById("EnterSalary").value;
    // values.push(salary);

    // let designation = document.getElementById("EnterDesignation").value;
    // values.push(designation);

    // let deptId = document.querySelector("select").value;
    // values.push(deptId);

    values.push(document.getElementById("EnterFirstName").value);
    values.push(document.getElementById("EnterLastName").value);
    values.push(document.getElementById("EnterSalary").value);
    values.push(document.getElementById("EnterDesignation").value);
    values.push(document.querySelector("select").value);


    // let input = document.querySelectorAll("input");

    const employee = {};
    const properties = ['empFName', 'empLName', 'empLName', 'empSalary', 'empDesignation', 'empDept']

    for (let i = 0; i < properties.length; i++) {
        employee[i] = values[i];
    }

    const result = addEmployee(employee);

    // if (result.status) {

    // }


    return result;

    // properties.forEach(element => {
    //     employee[element] = values[0];

    // });

    // });


    // const employee = { empId : 3,
    //     empFName : "Sanket",
    //     empLName : "Gupta",
    //     empSalary : "45000",
    //     empDesignation : "Data Engineer",
    //     empDept : departments[3].deptId}
}