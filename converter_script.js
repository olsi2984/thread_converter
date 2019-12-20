let unf = [
    {thread: "1/4 * 28 UNF", mm :  5.5},
    {thread: "5/16 * 24 UNF", mm :  6.9},
    {thread: "13/16 * 16 UNF", mm :  19.0},
    {thread: "13/16 * 18 UNF", mm :  19.0},
    {thread: "11/16 * 16 UNF", mm :  16.2},
    {thread: "3/8 * 24 UNF", mm :  8.5},
    {thread: "3/8 * 24 UNF", mm :  8.5}, 
    {thread:  "3/8 * 24 UNF", mm :  8.5},
    {thread:  "7/16 * 20 UNF", mm :  9.9},
    {thread:  "1/2 * 20 UNF", mm :  11.5},
    {thread:  "9/16 * 18 UNF", mm :  12.9},
    {thread:  "5/8 * 18 UNF", mm :  14.5},
    {thread:  "3/4 * 16 UNF", mm :  17.5},
    {thread:  "7/8 * 14 UNF", mm :  20.4},
    {thread:  "1 * 12 UNF", mm: 23.25},
    {thread:  "1 * 14 UNF", mm: 23.25},
    {thread:  "1 * 16-UN", mm: 23.8},
    {thread:  "1 1/16 * 12-UN", mm: 24.9},
    {thread:  "1 1/16 * 16-UN", mm: 25.5},
    {thread:  "1 1/8 * 12 UNF", mm: 26.5},
    {thread:  "1 1/8 * 16-UN", mm: 27.1},
    {thread:  "1 3/16 * 12-UN", mm: 28.1},
    {thread:  "1 3/16 * 16-UN", mm: 28.6},
    {thread:  "1 1/4 * 12 UNF", mm: 29.5},
    {thread:  "1 1/4 * 16-UN", mm: 30.2},
    {thread:  "1 5/16 * 12-UN", mm: 31.3},
    {thread:  "1 5/16 * 16-UN", mm: 31.8},
    {thread:  "1 3/8 * 12 UNF", mm: 32.75},
    {thread:  "1 3/8 * 16-UN", mm: 33.4},
    {thread:  "1 7/16 * 12-UN", mm: 34.5},
    {thread:  "1 7/16 * 16-UN", mm: 35},
    {thread:  "1 1/2 * 12 UNF", mm: 36},
    {thread:  "1 1/2 * 16-UN", mm: 36.6},
    {thread:  "1 5/8 * 12-UN", mm: 39.2},
    {thread:  "1 5/8 * 16-UN", mm: 39.8},
    {thread:  "1 3/4 * 12-UN", mm: 42.4},
    {thread:  "1 3/4 * 16-UN", mm: 42.9},
    {thread:  "1 7/8 * 12-UN", mm: 45.6},
    {thread:  "1 7/8 * 16-UN", mm: 46.1},
    {thread:  "2 * 12-UN", mm: 48.75},
    {thread:  "2 * 16-UN", mm: 49.3},
    {thread:  "2 1/8 * 12-UN", mm: 51.9},
    {thread:  "2 1/8 * 16-UN", mm: 52.5},
    {thread:  "2 1/4 * 12-UN", mm: 55.1},
    {thread:  "2 1/4 * 16-UN", mm: 55.6},
    {thread:  "2 3/8 * 12-UN", mm: 58.3},
    {thread:  "2 3/8 * 16-UN", mm: 58.8},
    {thread:  "2 1/2 * 12-UN", mm: 61.5},
    {thread:  "2 1/2 * 16-UN", mm: 62},     
];

let bsp = [
    {thread:  "G 1/8 BSP", mm: 8.85},
    {thread:  "G 1/4 BSP", mm: 11.9},
    {thread:  "G 3/8 BSP", mm: 15.4},
    {thread:  "G 1/2 BSP", mm: 19.17},
    {thread:  "G 5/8 BSP", mm: 21.13},
    {thread:  "G 3/4 BSP", mm: 24.66},
    {thread:  "G 7/8 BSP", mm: 28.42},
    {thread:  "G 1 BSP", mm: 30.93},
    {thread:  "G 1 1/8 BSP", mm: 35.6},
    {thread:  "G 1 1/4 BSP", mm: 39.6},
    {thread:  "G 1 3/8 BSP", mm: 42},
    {thread:  "G 1 1/2 BSP", mm: 45.5},
    {thread:  "G 1 3/4 BSP", mm: 51.5},
    {thread:  "G 2 BSP", mm: 57.3},
    {thread:  "G 2 1/4 BSP", mm: 63.4},
    {thread:  "G 2 1/2 BSP", mm: 73.9},
    {thread:  "G 2 3/4 BSP", mm: 79.3},
    {thread:  "G 3 BSP", mm: 85.6},
    {thread:  "G 3 1/4 BSP", mm: 91.7},
    {thread:  "G 3 1/2 BSP", mm: 98},
    {thread:  "G 3 3/4 BSP", mm: 104.3},
    {thread:  "G 4 BSP", mm: 110.71},
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

var table = document.querySelector("#table1");
var data = Object.keys(unf[0]);
generateTableHead(table, data);
generateTable(table, unf);

var table = document.querySelector("#table2");
var data = Object.keys(bsp[0]);
generateTableHead(table, data);
generateTable(table, bsp);

var btn2 = document.querySelector('#submitter');
btn2.addEventListener("click", function(){ 

  let n = document.getElementById("inputs").value;

  const filtered_unf = unf.filter(function (unf) {
    if (Math.abs(unf.mm - n) <= 1) {
     return true;
      }
      }) 
  
  const filtered_bsp = bsp.filter(function (bsp) {
    if (Math.abs(bsp.mm - n) <= 1) {
      return true;
      }
      }) 
  
  console.log(n);
  console.log(filtered_unf); 
  
  for (let i = 0; i < filtered_unf.length; i++) {
    document.getElementById("unfdisplay").innerHTML += filtered_unf[i].thread + " , ";    
  }  
  for (let i = 0; i < filtered_unf.length; i++) {
    document.getElementById("bspdisplay").innerHTML += filtered_bsp[i].thread + " , ";    
  }  
  reset_array();
  
    });

function reset_array() {
  filtered_unf = [];
  filtered_bsp = [];
}
















