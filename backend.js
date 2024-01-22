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

function addEmployee(employee) {

    if (Object.keys(employees).length < 1) {
        employees[1] = {
            empId: 1,
            empFName: employee.empFName,
            empLName: employee.empLName,
            empSalary: employee.empSalary,
            empDesignation: employee.empDesignation,
            empDept: employee.deptId
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
            empDept: employee.deptId
        }

        const status = true
        const replyMessage = message.empRegistered
        // console.log("start", employees)

        return { employees, status, replyMessage }
    }
}
