const root = document.getElementById('root');
// Create a table element
const table = document.createElement('table');

// Create table headers
const headers = ['Name', 'Age', 'City'];
const headerRow = document.createElement('tr');
headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Create table rows with data
const data = [
    ['John Doe', 25, 'New York'],
    ['Jane Smith', 30, 'Los Angeles'],
    ['Bob Johnson', 35, 'Chicago']
];
data.forEach(rowData => {
    const row = document.createElement('tr');
    rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
    });
    table.appendChild(row);
});

// Append the table to the root element
root.appendChild(table);
