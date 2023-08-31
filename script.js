function addNotebook() {
  var model = document.getElementById("model").value;
  var serialNumber = document.getElementById("serialNumber").value;
  var issuedTo = document.getElementById("issuedTo").value;
  
  var notebookItem = document.createElement("li");
  notebookItem.textContent = "Модель: " + model + ", Серийный номер: " + serialNumber + ", Выдан: " + issuedTo;
  
  var notebookList = document.getElementById("notebookList");
  notebookList.appendChild(notebookItem);
  
  // Очистка полей после добавления
  document.getElementById("model").value = "";
  document.getElementById("serialNumber").value = "";
  document.getElementById("issuedTo").value = "";
}
