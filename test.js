function createRegistrationForm() {
    let div = document.getElementById("root")
    let form = document.createElement("form");
    // form.method = "post"
    // form.action = "./firstui.js"
    // form.action = "#"
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
    submitButton.addEventListener("click", submitForm);

    let resetButton = document.createElement("button");
    resetButton.id = "can";
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Cancel";

    form.appendChild(submitButton);
    form.appendChild(resetButton);

    // document.body.appendChild(form);
    div.appendChild(form)
}

let result = {};

function submitForm() {
    // Get values from form
    let fName = document.getElementById("EnterFirstName").value;
    let lName = document.getElementById("EnterLastName").value;
    let salary = document.getElementById("EnterSalary").value;
    let designation = document.getElementById("EnterDesignation").value;
    let deptId = document.querySelector("select").value;
    console.log(fName)
    console.log(lName)
    console.log(salary)
    console.log(designation)
    console.log(deptId)

    // Call addEmployee function with form data
    result = addEmployee(fName, lName, salary, designation, deptId);

    // Log or handle the result accordingly
    // console.log(result.employees);
}

console.log("1111",result);

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

let employees = {}

// console.log("start", employees)

function addEmployee(fName, lName, salary, designation, deptId) {

    if (Object.keys(employees).length < 1) {
        employees[1] = {
            empId: 1,
            empFName: fName,
            empLName: lName,
            empSalary: salary,
            empDesignation: designation,
            empDept: deptId
        }

        // id++
        const status = true
        const replyMessage = message.empRegistered
       
        return { employees, status, replyMessage }

    }
    else {
        let key = Object.keys(employees).pop()
        let id = Number(key) + 1
        employees[id] = {
            empId: id,
            empFName: fName,
            empLName: lName,
            empSalary: salary,
            empDesignation: designation,
            empDept: deptId
        }

        const status = true
        const replyMessage = message.empRegistered
        console.log("start", employees)

        return { employees, status, replyMessage }
    }
}
