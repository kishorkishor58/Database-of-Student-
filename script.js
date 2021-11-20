var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["marks"] = document.getElementById("marks").value;
    formData["schoolName"] = document.getElementById("schoolName").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentDatabase").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.marks;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.schoolName;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("schoolName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[2].innerHTML;
    document.getElementById("schoolName").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.marks;
    selectedRow.cells[3].innerHTML = formData.schoolName;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentDatabase").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
