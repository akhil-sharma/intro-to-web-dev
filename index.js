function renderTable(rows=1){
    const rowCount = document.getElementById("rows").value || rows;
    generateTable(rowCount);
}

function generateTable(rows) {
    var tableArea = document.getElementById("tableArea");
   
    var table = document.createElement('table');
    
    var headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th'));
    headerRow.appendChild(document.createElement('th'));
    headerRow.cells[0].appendChild(document.createTextNode('Table Heading 1'));
    headerRow.cells[1].appendChild(document.createTextNode('Table Heading 2'));
    table.appendChild(headerRow);

    for (var i = 0; i < rows; i++){
        var tr = document.createElement('tr');

        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));

        tr.cells[0].appendChild(document.createTextNode(`Text - {${i + 1}, 1}`));
        tr.cells[1].appendChild(document.createTextNode(`Text - {${i + 1}, 2}`));

        table.appendChild(tr)
    }
    if (tableArea.childNodes.length > 1){
        console.log("YES");
        tableArea.replaceChild(table, tableArea.childNodes[2]);
    } else {
        console.log("No");
        tableArea.appendChild(table);
    }
}

// default calls
renderTable();