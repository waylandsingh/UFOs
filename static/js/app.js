//import data from data.js
const tableData = data

// Reference to HTML table using d3
var tbody = d3.select("tbody")

console.log(tbody.html)
let buildTable = (data) => {
    // clear out the table by referencing the HTML container obj tbody
    tbody.html("")

    // loop through the data to populate the table
    data.forEach(dataRow => {
        // append new row to table
        let row = tbody.append("tr");

        // loop through the values for each column in the row
        Object.values(dataRow).forEach(val => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
}
console.log(tableData)
buildTable(tableData)