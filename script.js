// Массив для хранения данных о ноутбуках
var notebooks = [];

function addNotebook() {
  var model = document.getElementById("model").value;
  var serialNumber = document.getElementById("serialNumber").value;
  var issuedTo = document.getElementById("issuedTo").value;
  
  // Создание объекта ноутбука
  var notebook = {
    model: model,
    serialNumber: serialNumber,
    issuedTo: issuedTo
  };
  
  // Добавление объекта в массив
  notebooks.push(notebook);
  
  // Обновление списка на странице
  updateNotebookList();
  
  // Очистка полей после добавления
  document.getElementById("model").value = "";
  document.getElementById("serialNumber").value = "";
  document.getElementById("issuedTo").value = "";
}

function updateNotebookList() {
  var notebookList = document.getElementById("notebookList");
  notebookList.innerHTML = ""; // Очистка списка
  
  // Добавление каждого ноутбука в список
  notebooks.forEach(function(notebook) {
    var notebookItem = document.createElement("li");
    notebookItem.textContent = "Модель: " + notebook.model + ", Серийный номер: " + notebook.serialNumber + ", Выдан: " + notebook.issuedTo;
    notebookList.appendChild(notebookItem);
  });
}

