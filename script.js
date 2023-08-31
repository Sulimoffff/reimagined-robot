<<<<<<< HEAD
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

=======
const notebookTable = document.getElementById('notebook-table').getElementsByTagName('tbody')[0];

// Добавляем данные в таблицу
function addRow(name, date, specs) {
    const newRow = notebookTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = specs;
}

// Вызываем функцию для добавления данных
addRow('Иванов Иван', '01.09.2023', 'Модель: HP EliteBook, RAM: 8GB, HDD: 256GB SSD');
addRow('Петрова Елена', '15.09.2023', 'Модель: Dell Latitude, RAM: 16GB, SSD: 512GB');
// Добавьте дополнительные строки для других сотрудников
>>>>>>> 8ac6e6c757f3848831d875f83b1e1c87bf12c44e
