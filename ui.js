const departments = {
    '1': {
        deptId: 1,
        deptName: "IT"
    },
    '2': {
        deptId: 2,
        deptName: "HR"
    },
    '3': {
        deptId: 3,
        deptName: "Engineering"
    }
}

const message = {
    empRegistered: "Employ registered successfully",
    empExist: "Employ exist in the Employees table",
    empEdited: "Employ details updated successfully",
    empDeleted: "Employ associated with empId deleted successfully",
    empNotExist: "Employ empId not found in Employess table"

}

let employees = {
    // '1': {
    //     empId: 1,
    //     empFName: "Ashutosh",
    //     empLName: "Verulkar",
    //     empSalary: "20000",
    //     empDesignation: "Developer",
    //     empDept: departments[1].deptId
    // },
    // '2': {
    //     empId: 2,
    //     empFName: "Harshal",
    //     empLName: "Dhokane",
    //     empSalary: "37000",
    //     empDesignation: "Developer",
    //     empDept: departments[1].deptId
    // },
    // '3': {
    //     empId: 3,
    //     empFName: "Sanket",
    //     empLName: "Gupta",
    //     empSalary: "45000",
    //     empDesignation: "Data Engineer",
    //     empDept: departments[3].deptId
    // }
}


// -----------------------Main Page------------------------------
function renderEmployeeList() {
    // const head = document.querySelector("head");
    // head.innerHTML = "";

    // head.innerHTML = `<meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <link rel="stylesheet" href="./index.css">
    //     <link rel="stylesheet" href="./navbar.css">
    //     <script src="./ui.js"></script>
    //     <title>Employee Details</title>`;

    document.body.innerHTML = "";

    const root = document.createElement("div");
    root.id = "root";
    root.innerHTML = "";

    // const root = document.getElementById("root");
    // root.innerHTML = "";

    const listDiv = document.createElement("div");
    listDiv.id = "left";

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

    for (const key in employees) {
        const row = listBody.insertRow();
        const cell = row.insertCell(0);
        const button = document.createElement("input");
        button.type = "button";
        button.value = `${employees[key].empFName} ${employees[key].empLName}`;
        button.onclick = () => displayEmployeeDetails(employees[key]);
        cell.appendChild(button);
    }

    listTable.append(listHead, listBody);

    const detailsDiv = document.createElement("div");
    detailsDiv.id = "right";

    root.append(listDiv, detailsDiv);

    const detailsHeader = document.createElement("div");

    const detailsTitle = document.createElement("h3");
    detailsTitle.textContent = "Employee Details";

    const navdiv = document.createElement("div");
    navdiv.id = "navdiv";
    const nav = document.createElement("nav");

    const homeButton = document.createElement("input");
    homeButton.type = "button";
    homeButton.value = "Home";
    homeButton.onclick = renderEmployeeList;

    const addButton = document.createElement("input");
    addButton.type = "button";
    addButton.value = "Add Employee";
    addButton.onclick = createRegistrationForm;
    nav.append(homeButton, addButton);

    detailsHeader.append(detailsTitle);

    const viewDiv = document.createElement("div");
    viewDiv.id = "view";
    viewDiv.textContent = "Please select an employee to view details.";
    // viewDiv.append(addButton);

    detailsDiv.append(detailsHeader, viewDiv);
    navdiv.append(nav);
    document.body.append(navdiv, root);
}

// function displayEmployeeDetails(employee) {
//     const viewDiv = document.getElementById("view");
//     viewDiv.innerHTML = "";
//     viewDiv.innerHTML = `
//     <p>ID: ${employee.empId}</p>
//     <p>First Name: ${employee.empFName}</p>
//     <p>Last Name: ${employee.empLName}</p>
//     <p>Salary: ${employee.empSalary}</p>
//     <p>Designation: ${employee.empDesignation}</p>
//     <p>Dept ID: ${employee.empDept}</p>
//     `;
// }

function displayEmployeeDetails(employee) {
    const viewDiv = document.getElementById("view");
    viewDiv.innerHTML = ""; // Clear previous content
    let labels = ["Employee Id : ", "First Name : ", "Last Name : ", "Salary : ", "Designation : ", "Department : "];
    let value = Object.values(employee);
    // for (let i = 0; i < labels.length; i++) {
    //     const paragraph = document.createElement("p");
    //     paragraph.textContent = `${labels[i]}${value[i]}`
    //     viewDiv.append(paragraph);
    // }

    const table = document.createElement("table");
    for (let i = 0; i < labels.length; i++) {
        const tr = document.createElement("tr");
        const tdname = document.createElement("td");
        tdname.textContent = labels[i];
        const tdvalue = document.createElement("td");
        tdvalue.textContent = value[i];
        tr.append(tdname, tdvalue);
        table.append(tr);
    }

    const nav = document.createElement("nav");

    const editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";
    // editButton.onclick = renderEmployeeList;

    const delButton = document.createElement("input");
    delButton.type = "button";
    delButton.value = "Delete";
    // delButton.onclick = createRegistrationForm;
    nav.append(editButton, delButton);

    viewDiv.append(table,nav);



    // const para = document.createElement("p");
    // para.textContent = `${labels[labels.length - 1]}${departments.value[value.length - 1]}`
    // viewDiv.append(para);

    // for (const prop in employee) {
    //     if (employee.hasOwnProperty(prop)) {
    //         const value = employee[prop];
    //         // const formattedProp = prop.replace(/([a-z])([A-Z])/g, '$1 $2'); // Convert camelCase to Camel Case
    //         const paragraph = document.createElement("p");
    //         paragraph.textContent = `${formattedProp}: ${value}`;
    //         viewDiv.appendChild(paragraph);
    //     }
    // }
}


function editEmployee(empId, editProperties) {
    if (employees[empId]) {
        for (const prop in editProperties) {
            if (editProperties.hasOwnProperty(prop)) {
                employees[empId][prop] = editProperties[prop];
            }
        }

        const status = true
        const replyMessage = message.empEdited

        return { employees, status, replyMessage }
    } else {
        const status = false
        const replyMessage = message.empNotExist

        return { employees, status, replyMessage }
    }
}

function delEmployee(empId) {
    if (employees[empId]) {
        delete employees[empId]
        const status = true
        const replyMessage = message.empDeleted

        return { employees, status, replyMessage }
    } else {
        const status = false
        const replyMessage = message.empNotExist

        return { employees, status, replyMessage }
    }

}



// ---------------------Employee Registration Page--------------------
function createRegistrationForm() {
    // const head = document.querySelector("head");
    // head.innerHTML = "";

    // head.innerHTML = `<meta charset="UTF-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // <link rel="stylesheet" href="registration.css">
    // <link rel="stylesheet" href="./navbar.css">
    // <script src="./ui.js"></script>
    // <script src="./backend.js"></script>
    // <title>Employee Details</title>`;


    // const body = document.querySelector("body");
    // body.innerHTML = "";

    // const nav = document.createElement("nav");
    // nav.innerHTML = "";

    // const div = document.createElement("div");
    // div.id = "root";
    // div.innerHTML = "";

    let div = document.getElementById("root");
    div.innerHTML = "";

    let form = document.createElement("form");
    // form.method = "post"
    // form.action = "./firstui.js"
    form.action = "";
    form.id = "empForm";
    let heading = document.createElement("h3");
    heading.id = "heading"
    heading.textContent = "Employee Registration";
    form.appendChild(heading);

    let labels = ["Enter First Name", "Enter Last Name", "Enter Salary", "Enter Designation"];
    let inputTypes = ["text", "text", "text", "text"];

    for (let i = 0; i < labels.length; i++) {
        //   let label = document.createElement("label");
        //   label.textContent = labels[i] + " : ";
        let input = document.createElement("input");
        input.setAttribute("type", inputTypes[i]);
        input.placeholder = labels[i]
        input.id = labels[i].replace(/\s/g, '');
        input.setAttribute("required", "")
        //   input.setAttribute("name", labels[i].toLowerCase());
        //   input.setAttribute("size", i === 2 ? "0" : "15");
        //   form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    }

    // let departmentLabel = document.createElement("label");
    // departmentLabel.textContent = "Department ID : ";
    let select = document.createElement("select");
    select.id = "deptIds"
    let departmentOptions = ["IT", "HR", "Engineering"];

    select.setAttribute("required", "")

    let option1 = document.createElement("option");
    option1.text = "Select Department";
    option1.value = "";
    select.appendChild(option1)


    for (let i = 0; i < departmentOptions.length; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.textContent = departmentOptions[i];
        select.appendChild(option);
    }

    form.appendChild(select);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    let submitButton = document.createElement("button");
    submitButton.id = "sub";
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", showEmployeeRegistrationStatus);

    let resetButton = document.createElement("button");
    resetButton.id = "can";
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Cancel";

    // form.appendChild(submitButton);
    // form.appendChild(resetButton);
    form.append(submitButton, resetButton);

    // document.body.appendChild(form);
    div.appendChild(form)
    // document.body.append(div);
}



//-----Employee data collect, process and send to backend function------
function showEmployeeRegistrationStatus() {
    let values = [];
    values.push(document.getElementById("EnterFirstName").value);
    values.push(document.getElementById("EnterLastName").value);
    values.push(document.getElementById("EnterSalary").value);
    values.push(document.getElementById("EnterDesignation").value);
    values.push(document.getElementById("deptIds").value);

    const employee = {};
    const properties = ['empFName', 'empLName', 'empSalary', 'empDesignation', 'empDept']

    for (let i = 0; i < properties.length; i++) {
        employee[properties[i]] = values[i];
    }

    const result = addEmployee(employee);

    if (result.status) {
        alert(result.replyMessage)
        renderEmployeeList();
    } else {
        alert(result.replyMessage);
        renderEmployeeList();
    }

    // if (result.status) {
    //     let root = document.getElementById("root");
    //     root.innerHTML = "";

    //     const viewDiv = document.createElement("div");
    //     viewDiv = "view";
    //     viewDiv.innerHTML = `
    //         <p>${result.replyMessage}</p>
    //         <p>ID: ${result.employees.empId}</p>
    //         <p>First Name: ${result.employees.empFName}</p>
    //         <p>Last Name: ${result.employees.empLName}</p>
    //         <p>Salary: ${result.employees.empSalary}</p>
    //         <p>Designation: ${result.employees.empDesignation}</p>
    //         <p>Dept ID: ${result.employees.empDept}</p>
    //         `;

    //     root.append(viewDiv);
    // }
}


// ----Employee registration backend function------------
function addEmployee(employee) {

    if (Object.keys(employees).length < 1) {
        employees[1] = {
            empId: 1,
            empFName: employee.empFName,
            empLName: employee.empLName,
            empSalary: employee.empSalary,
            empDesignation: employee.empDesignation,
            empDept: departments[employee.empDept].deptName
        };

        const status = true
        const replyMessage = message.empRegistered

        return { employees, status, replyMessage }

    }
    else {
        let key = Object.keys(employees).pop()
        let id = Number(key) + 1
        employees[id] = {
            empId: id,
            empFName: employee.empFName,
            empLName: employee.empLName,
            empSalary: employee.empSalary,
            empDesignation: employee.empDesignation,
            empDept: departments[employee.empDept].deptName
        }

        const status = true
        const replyMessage = message.empRegistered
        // console.log("start", employees)

        return { employees, status, replyMessage }
    }
}




// function addEmployee() {
//     const newEmployee = { empId: Object.keys(employees).length + 1, empFName: "Nikhilesh", empLName: "Mane", empSalary: "18000", empDesignation: "Team Lead", empDept: departments[2] };
//     employees[Object.keys(employees).length + 1] = newEmployee;
//     renderEmployeeList();
//     displayEmployeeDetails(newEmployee);
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

// Function to create the HTML structure dynamically
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


