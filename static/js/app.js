//import data from data.js
const tableData = data

function buildTable(data){
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

var tbody = ''

// Try rewriting the callback as a promise
let loadScripts = src => new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.src = src
            document.head.append(script)
            script.onload = () => resolve("script loaded") //remember that this should be a function!
        })

loadScripts("https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js")
    .then(result => {
        tbody = d3.select("tbody")
        console.log(result)
        buildTable(data)
    })
    .catch(error => console.log(error))



document.getElementById("submit-form").addEventListener("click", ()=>console.log("clicked"))


