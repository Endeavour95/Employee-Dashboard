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

function createForm() {
    let form = document.createElement("form");
    form.setAttribute("id", "employeeForm");

    let labels = ["First Name", "Last Name", "Salary", "Designation"];
    let inputTypes = ["text", "text", "number", "text"];

    for (let i = 0; i < labels.length; i++) {
        let label = document.createElement("label");
        label.setAttribute("for", "input" + i);
        label.textContent = labels[i] + ":";

        let input = document.createElement("input");
        input.setAttribute("type", inputTypes[i]);
        input.setAttribute("id", "input" + i);
        input.setAttribute("name", "input" + i);
        input.required = true;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
    }

    
    let label = document.createElement("label");
    label.setAttribute("for", "input" + "Department ID");
    label.textContent = "Department ID" + ":";
    
    let dropdown = document.createElement("select");
    dropdown.setAttribute("id", "myDropdown");

    let option1 = document.createElement("option");
    option1.value = "none";
    option1.selected
    option1.text = "Select Department"
    for (const key in departments) {
        let option = document.createElement("option");
        option.value = Number(key);
        // console.log("11111111111", option.value)

        option.text = key;
        dropdown.appendChild(option);
    }

    // let input = document.createElement("input");
    // input.setAttribute("type", inputTypes["Department ID"]);
    // input.setAttribute("id", "input" + "Department ID");
    // input.setAttribute("name", "input" + "Department ID");
    // input.required = true;

    form.appendChild(label);
    form.appendChild(dropdown);
    form.appendChild(document.createElement("br"));

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("class", "cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", cancelForm);

    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    document.body.appendChild(form);
}

function cancelForm() {
    document.getElementById("employeeForm").reset();
}

// Call the createForm function to generate the form dynamically
createForm();



{/* <Html>
<head>
    <title>
        Registration Page
    </title>
</head>

<body>
    <div>
        <br>
        <br>
        <form>
            <h3>Employee Registration</h3>
            <label> Firstname : </label>
            <input type="text" name="firstname" size="15" /> <br> <br>
            <label> Lastname : </label>
            <input type="text" name="lastname" size="15" /> <br> <br>
            <label> Salary : </label>
            <input type="number" name="Salary" size="0" /> <br> <br>
            <label> Designation: </label>
            <input type="text" name="designation" size="15" /> <br> <br>
            <label>
                Department ID :
            </label>
            <select>
                <option value="1">IT</option>
                <option value="2">HR</option>
                <option value="3">Engineering</option>
            </select> <br> <br>
            <button type="submit">Submit</button>
            <button type="reset">Cancel</button>
        </form>
    </div>
</body>
</html> */}