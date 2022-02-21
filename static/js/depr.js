// place for old snippets of code from the project

// callback for script loading
// // demo a callback function here
// function loadScript(src, callback) {
//     //create the script element with a particular source
//     let script = document.createElement('script');
//     script.src = src;

//     // execute the callback function
//     script.onload = () => callback(script) ;
//     document.head.append(script);
// }
// use the ajax script as example here with a callback to print to console
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js", script => {
//     console.log(`${script.src} has been loaded`);
//     // Reference to HTML table using d3
//     tbody = d3.select("tbody")
//     buildTable(data)
// });