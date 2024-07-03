// Lấy dữ liệu từ mon.js
var scheduleData = mon;

// Hàm tạo bảng lịch học từ dữ liệu
function loadSchedule() {
    var tableBody = document.getElementById('schedule-body');
    tableBody.innerHTML = '';

    scheduleData.forEach((mon, index) => {
        var row = document.createElement('tr');

        mon.forEach(cell => {
            var cellElement = document.createElement('td');
            cellElement.textContent = cell;
            cellElement.contentEditable = true; // Cho phép chỉnh sửa
            row.appendChild(cellElement);
        });

        // Thêm nút xóa
        var actionCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Xóa";
        deleteButton.classList.add('action-btn');
        deleteButton.onclick = function() {
            deleteRow(index);
        };
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}

// Hàm thêm dòng mới
function addRow() {
    var tableBody = document.getElementById('schedule-body');
    var row = document.createElement('tr');

    for (var i = 0; i < 5; i++) {
        var cell = document.createElement('td');
        cell.contentEditable = true;
        row.appendChild(cell);
    }

    // Thêm nút xóa cho dòng mới
    var actionCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add('action-btn');
    deleteButton.onclick = function() {
        row.remove();
    };
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
}

// Hàm xóa dòng
function deleteRow(index) {
    scheduleData.splice(index, 1);
    loadSchedule();
}

// Tải bảng khi trang được tải
window.onload = function() {
    loadSchedule();
};
