function addBeneficiary() {
  // Get a reference to the table
  var table = document.querySelector("#BeneficiaryTable");

  // Insert a new row at the end of the table
  var newRow = table.insertRow();

  // Insert cells into the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  // Set the content of the cells
  cell1.innerHTML = document.getElementById("fname").value;
  cell2.innerHTML = document.getElementById("lname").value;
  cell3.innerHTML = document.getElementById("RelationshipDetails").value;
}

function editFunction() {}

function finishFunction() {}
