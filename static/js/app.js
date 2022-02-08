//import data from data.js
const tableData = data

// Reference to HTML table using d3
var tbody = d3.select("tbody")

function buildTable (data) {
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

function handleClick() {
    // use d3 to grab date
    let date = d3.select("#datetime").property("value")

    // need to parse the date from d3 to match that in the data to filter
    console.log(date)
    
    let filteredData = tableData // from GLOBAL scope!

    if (date) {
        filteredData = filteredData.filter(result => {result.datetime === date})
    }

    buildTable(filteredData)
}

document.getElementById("submit-form").addEventListener("click", handleClick)