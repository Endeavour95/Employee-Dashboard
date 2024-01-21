// function createRegistrationForm() {
//     let div = document.getElementById("root");
//     let form = document.createElement("form");
//     // form.method = "post"
//     // form.action = "./firstui.js"
//     // form.action = "#"
//     let heading = document.createElement("h3");
//     heading.id = "heading"
//     heading.textContent = "Employee Registration";
//     form.appendChild(heading);

//     let labels = ["Enter First Name", "Enter Last Name", "Enter Salary", "Enter Designation"];
//     let inputTypes = ["text", "text", "text", "text"];

//     for (let i = 0; i < labels.length; i++) {
//         //   let label = document.createElement("label");
//         //   label.textContent = labels[i] + " : ";
//         let input = document.createElement("input");
//         input.setAttribute("type", inputTypes[i]);
//         input.placeholder = labels[i]
//         input.id = labels[i].replace(/\s/g, '');
//         input.setAttribute("required", "")
//         //   input.setAttribute("name", labels[i].toLowerCase());
//         //   input.setAttribute("size", i === 2 ? "0" : "15");
//         //   form.appendChild(label);
//         form.appendChild(input);
//         form.appendChild(document.createElement("br"));
//         form.appendChild(document.createElement("br"));
//     }

//     // let departmentLabel = document.createElement("label");
//     // departmentLabel.textContent = "Department ID : ";
//     let select = document.createElement("select");
//     select.id = "deptIds"
//     let departmentOptions = ["IT", "HR", "Engineering"];

//     select.setAttribute("required", "")

//     let option1 = document.createElement("option");
//     option1.text = "Select Department";
//     option1.value = "";
//     select.appendChild(option1)


//     for (let i = 0; i < departmentOptions.length; i++) {
//         let option = document.createElement("option");
//         option.value = i + 1;
//         option.textContent = departmentOptions[i];
//         select.appendChild(option);
//     }

//     form.appendChild(select);
//     form.appendChild(document.createElement("br"));
//     form.appendChild(document.createElement("br"));

//     let submitButton = document.createElement("button");
//     submitButton.id = "sub";
//     submitButton.setAttribute("type", "submit");
//     submitButton.textContent = "Submit";
//     submitButton.addEventListener("click", submitForm);

//     let resetButton = document.createElement("button");
//     resetButton.id = "can";
//     resetButton.setAttribute("type", "reset");
//     resetButton.textContent = "Cancel";

//     form.appendChild(submitButton);
//     form.appendChild(resetButton);

//     // document.body.appendChild(form);
//     div.appendChild(form)
// }




// function openAddEmployeeForm() {
//     // Implement logic to open the form for adding employees
//     console.log('Add Employee Form');


// }

// function showEmployeeDetails(employeeName) {
//     // Implement logic to fetch and display details of the selected employee
//     let detailsElement = document.getElementById('selectedEmployeeDetails');
//     detailsElement.textContent = `Details of ${employeeName}`;
// }

// // Function to create the HTML structure dynamically
// function createEmployeeManagementSystem() {
//     let div = document.getElementById("root")
//     // div.className = "row";
//     div.innerHTML = '<h2>Employee Management System</h2>';

//     // Create navbar
//     let divNav = document.createElement("div")
//     divNav.className = 'row';
//     let nav = document.createElement("nav");
//     // nav.innerHTML = '<h2>Employee Management System</h2><button onclick="openAddEmployeeForm()">Add Employee</button>';    
//     nav.innerHTML = '<button id="emp" onclick="openAddEmployeeForm()">Add Employee</button>';
//     divNav.appendChild(nav);
//     div.appendChild(divNav);

//     // Create table
//     let divtable = document.createElement("div");
//     divtable.className = "column1"
//     let table = document.createElement("table");
//     table.id = "employeeTable";
//     table.innerHTML = '<thead><tr><th>Employees</th></tr></thead><tbody>\
//                         <tr onclick="showEmployeeDetails(\'John Doe\')"><td>John Doe</td></tr>\
//                         <tr onclick="showEmployeeDetails(\'Jane Doe\')"><td>Jane Doe</td></tr>\
//                         <!-- Add more rows as needed -->\
//                     </tbody>';
//     divtable.appendChild(table);
//     div.appendChild(divtable);

//     // Create employee details div
//     let detailsDiv = document.createElement("div");
//     detailsDiv.className = "column2";
//     detailsDiv.id = "employeeDetails";
//     detailsDiv.innerHTML = '<h2>Employee Details</h2><p id="selectedEmployeeDetails">Select an employee to view details</p>';
//     div.appendChild(detailsDiv);
// }

// // Call the function to generate the HTML structure
// // createEmployeeManagementSystem();



const departments = {
    '1' : {
        deptId : 1,
        deptName : "IT"
    },
    '2' : {
        deptId : 2,
        deptName : "HR"
    },
    '3' : {
        deptId : 3,
        deptName : "Engineering"
    }
}

const employees1 = [
    { empId: 1, empFName: "John", empLName: "Doe", empSalary: 50000, empDesignation: "Software Engineer", empDept: departments[1].deptId },
    { empId: 2, empFName: "Jane", empLName: "Doe", empSalary: 60000, empDesignation: "Manager", empDept: departments[2].deptId },
    { empId: 3, empFName: "Bob", empLName: "Smith", empSalary: 55000, empDesignation: "Designer", empDept: departments[3].deptId },
    { empId: 4, empFName: "Alice", empLName: "Johnson", empSalary: 70000, empDesignation: "Project Manager", empDept: departments[1].deptId }
];

let employees = {
    '1' : {
        empId : 1,
        empFName : "Ashutosh",
        empLName : "Verulkar",
        empSalary : "20000",
        empDesignation : "Developer",
        empDept : departments[1].deptId
    },
    '2' : {
        empId : 2,
        empFName : "Harshal",
        empLName : "Dhokane",
        empSalary : "37000",
        empDesignation : "Developer",
        empDept : departments[1].deptId
    },
    '3' : {
        empId : 3,
        empFName : "Sanket",
        empLName : "Gupta",
        empSalary : "45000",
        empDesignation : "Data Engineer",
        empDept : departments[3].deptId
    }
}

// Function to render the employee list
function renderEmployeeList() {
    // const root = document.createElement("div");
    // root.id = "root";
    // document.body.appendChild(root);

    const root = document.getElementById("root");
    root.innerHTML = "";

    const listDiv = document.createElement("div");
    
    const listTable = document.createElement("table");
    listTable.id = "list";
    listDiv.appendChild(listTable);
    
    const listHead = document.createElement("thead");
    
    const listHeadRow = document.createElement("tr");
    
    const listHeader = document.createElement("th");
    listHeader.textContent = "Employees List";
    listHeadRow.appendChild(listHeader);
    
    listHead.appendChild(listHeadRow);
    
    
    const listBody = document.createElement("tbody");
    
    // employees.forEach(employee => {
    //     const row = listBody.insertRow();
    //     const cell = row.insertCell(0);
    //     const button = document.createElement("input");
    //     button.type = "button";
    //     button.value = `${employee.empFName} ${employee.empLName}`;
    //     button.onclick = () => displayEmployeeDetails(employee);
    //     cell.appendChild(button);
    // });

    for (const key in employees) {
        const row = listBody.insertRow();
        const cell = row.insertCell(0);
        const button = document.createElement("input");
        button.type = "button";
        button.value = `${employees[key].empFName} ${employees[key].empLName}`;
        button.onclick = () => displayEmployeeDetails(employees[key]);
        cell.appendChild(button);
    }
    
    // listTable.appendChild(listHead);
    // listTable.appendChild(listBody);
    listTable.append(listHead,listBody);
    
    const detailsDiv = document.createElement("div");

    // root.appendChild(listDiv);
    // root.appendChild(detailsDiv);
    root.append(listDiv, detailsDiv);
    
    const detailsHeader = document.createElement("div");
    
    const detailsTitle = document.createElement("h3");
    detailsTitle.textContent = "Employee Details";
    
    const addButton = document.createElement("input");
    addButton.type = "button";
    addButton.value = "Add Employee";
    addButton.onclick = addEmployee;
    
    // detailsHeader.appendChild(detailsTitle);
    // detailsHeader.appendChild(addButton);    
    detailsHeader.append(detailsTitle, addButton);
    
    const viewDiv = document.createElement("div");
    viewDiv.id = "view";
    viewDiv.textContent = "Please select an employee to view details.";

    // detailsDiv.appendChild(detailsHeader);
    // detailsDiv.appendChild(viewDiv);
    detailsDiv.append(detailsHeader, viewDiv);
}

// Function to display employee details
function displayEmployeeDetails(employee) {
    const viewDiv = document.getElementById("view");
    viewDiv.innerHTML = "";
    viewDiv.innerHTML = `
        <p>ID: ${employee.empId}</p>
        <p>First Name: ${employee.empFName}</p>
        <p>Last Name: ${employee.empLName}</p>
        <p>Salary: ${employee.empSalary}</p>
        <p>Designation: ${employee.empDesignation}</p>
        <p>Dept ID: ${employee.empDept}</p>
    `;
}

// Function to add a new employee
function addEmployee1() {
    // For simplicity, you can add your logic to gather input and add a new employee to the array.
    // For now, let's add a sample employee.
    const newEmployee = { empId: employees.length + 1, empFName: "Nikhilesh", empLName: "Mane", empSalary: 18000, empDesignation: "Analyst", empDept: departments[2].deptId };
    employees.push(newEmployee);
    renderEmployeeList();
    displayEmployeeDetails(newEmployee);
}

function addEmployee() {
    let alot = Object.keys(employees).length + 1
    const newEmployee = { empId: alot, empFName: "Nikhilesh", empLName: "Mane", empSalary: "18000", empDesignation: "", empDept: departments[2] };
    employees[alot] = newEmployee;
    renderEmployeeList();
    displayEmployeeDetails(newEmployee);
}

