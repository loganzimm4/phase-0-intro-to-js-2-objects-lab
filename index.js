const employee = {
    name: "Luke",
    streetAddress: "3200 Boardwalk", 
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee
}
function deleteFromEmployeeByKey(obj, key, value) {
const newObj = {...obj};
newObj[key] = value;
return newObj
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee
}