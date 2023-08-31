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
