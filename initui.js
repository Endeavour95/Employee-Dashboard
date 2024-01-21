function tableCreate() {
    let div = document.getElementById("root");

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tblName = document.createElement("thead")
    let tblFRow = document.createElement("tr")
    let tblFRowData = document.createElement("th")
    let tName = document.createTextNode("Employees")

    for (let j = 0; j <= 2; j++) {

        let row = document.createElement("tr");

        let cell = document.createElement("td");
        let cellText = document.createTextNode("cell is row " + j);

        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
    }
    tblFRowData.appendChild(tName)
    tblFRow.appendChild(tblFRowData)
    tblName.appendChild(tblFRow)
    tbl.appendChild(tblName)
    
    tbl.appendChild(tblBody);
    div.appendChild(tbl);
    // tbl.setAttribute("Employess");
}

function addEmployeeForm() {
    let div = document.getElementById("root")

    let form = document.createElement("form")
    form.setAttribute("id", "employeeForm")
    form.method = "post";

    let fName = document.createTextNode("First Name : ")
    let lbl = document.createElement("label")
    // let inp = document.createElement("input")
    // lbl.setAttribute("for", "firstName")
    lbl.appendChild(fName)
    // inp.setAttribute("type", "text")
    // inp.setAttribute("id", "firstName")
    // inp.setAttribute("name", "firstName")
    // inp.setAttribute("required")
    // form.appendChild(lbl)
    // form.appendChild(inp)

    // let lName = document.createTextNode("Last Name : ")
    // let lbl1 = document.createElement("label")
    // let inp1 = document.createElement("input")
    // lbl1.setAttribute("for", "lastName")
    // lbl1.appendChild(lName)
    // inp1.setAttribute("type", "text")
    // inp1.setAttribute("id", "lastName")
    // inp1.setAttribute("name", "lastName")
    // inp1.setAttribute("required")
    // form.appendChild(lbl1)
    // form.appendChild(inp1)

    // let sal = document.createTextNode("Salary : ")
    // let lbl2 = document.createElement("label")
    // let inp2 = document.createElement("input")
    // lbl2.setAttribute("for", "salary")
    // lbl2.appendChild(sal)
    // inp2.setAttribute("type", "number")
    // inp2.setAttribute("id", "salary")
    // inp2.setAttribute("name", "salary")
    // inp2.setAttribute("required")
    // form.appendChild(lbl2)
    // form.appendChild(inp2)

    // let deg = document.createTextNode("Designation : ")
    // let lbl3 = document.createElement("label")
    // let inp3 = document.createElement("input")
    // lbl3.setAttribute("for", "designation")
    // lbl3.appendChild(deg)
    // inp3.setAttribute("type", "text")
    // inp3.setAttribute("id", "designation")
    // inp3.setAttribute("name", "designation")
    // inp3.setAttribute("required")
    // form.appendChild(lbl3)
    // form.appendChild(inp3)

    // let dept = document.createTextNode("Department Id : ")
    // let lbl4 = document.createElement("label")
    // let inp4 = document.createElement("input")
    // lbl4.setAttribute("for", "departmentId")
    // lbl4.appendChild(dept)
    // inp4.setAttribute("type", "number")
    // inp4.setAttribute("id", "departmentId")
    // inp4.setAttribute("name", "departmentId")
    // inp4.setAttribute("required")
    // form.appendChild(lbl4)
    // form.appendChild(inp4)

    let sbtn = document.createElement("button")
    let sName = document.createTextNode("Submit")
    sbtn.setAttribute("type", "button")
    // sbtn.setAttribute("value", "Submit")
    cbtn.setAttribute("onclick", "addEmployee()")
    sbtn.setAttribute("id", "sbtn")
    sbtn.appendChild(sName)
    form.appendChild(sbtn)

    let cbtn = document.createElement("button")
    let cName = document.createTextNode("Cancel")
    cbtn.setAttribute("type", "button")
    cbtn.setAttribute("class", "cancel")
    cbtn.setAttribute("onclick", "cancelForm()")
    cbtn.setAttribute("id", "cbtn")
    cbtn.appendChild(cName)
    form.appendChild(cbtn)   
    
    div.appendChild(form)
}

function cancelForm() {
    document.getElementById("employeeForm").reset();
}
