// Event Listeners
function startEventListener() {
  document
    .getElementById("next-button")
    .addEventListener("click", buttonClickHandler);
  document
    .getElementById("calculate-button")
    .addEventListener("click", buttonClickHandler);
  document
    .getElementById("start-again-button")
    .addEventListener("click", buttonClickHandler);

  document
    .getElementById("circle")
    .addEventListener("click", shapeClickHandler);
  document
    .getElementById("triangle")
    .addEventListener("click", shapeClickHandler);
  document
    .getElementById("square")
    .addEventListener("click", shapeClickHandler);
}
startEventListener();

// Value of pi
const pi = 3.141;

// Shapes object
var shapes = {
  circle: {
    stepTwoHeading: "2. Enter Radius",
    shapeName: "Circle",
    calculateArea: (r) => {
      return (pi * r * r).toFixed(2);
    },
    calculatePerimeter: (r) => {
      return (2 * pi * r).toFixed(2);
    },
    dimension: "RADIUS",
    dim_unit: "cm",
    area_unit: "sq cm",
    peri_unit: "cm",
    dim_formula: "r",
    area_formula: "&pi;r\u00b2",
    peri_formula: "2&pi;r",
  },
  triangle: {
    stepTwoHeading: "2. Enter Side (Base & Height)",
    shapeName: "Equilateral Triangle",
    calculateArea: (s) => {
      return (0.433 * s * s).toFixed(2);
    },
    calculatePerimeter: (s) => {
      return s * 3;
    },
    dimension: "SIDE",
    dim_unit: "cm",
    area_unit: "sq cm",
    peri_unit: "cm",
    dim_formula: "s",
    area_formula: "0.433 * s * s",
    peri_formula: "3 * s",
  },
  square: {
    stepTwoHeading: "2. Enter Side",
    shapeName: "Square",
    calculateArea: (s) => {
      return s * s;
    },
    calculatePerimeter: (s) => {
      return 4 * s;
    },
    dimension: "SIDE",
    dim_unit: "cm",
    area_unit: "sq cm",
    peri_unit: "cm",
    dim_formula: "s",
    area_formula: "s * s",
    peri_formula: "4 * s",
  },
};

// Shape Click Handler Function
function shapeClickHandler(event) {
  document.getElementById("next-button").style.visibility = "visible";
  showTickMark(event.target.id);
  localStorage.setItem("shape", event.target.id);
}

// Button Click Handler Function
function buttonClickHandler(event) {
  if (event.target.id == "next-button") {
    changeSection("step-1", "step-2");
    hideNextButton();
    setSelectedShape();
    setHeading();
  } else if (event.target.id == "calculate-button") {
    let enteredValue = document.getElementById("input-dimension").value;
    if (isValid(enteredValue)) {
      createTable(enteredValue);
      changeSection("step-2", "step-3");
    } else {
      alert("Enter a valid number");
    }
    document.getElementById("input-dimension").value = "";
  } else if (event.target.id == "start-again-button") {
    changeSection("step-3", "step-1");
    hideTicks();
  }
}

// Function to show the tick mark
function showTickMark(shape) {
  hideTicks();
  document.querySelector(`#${shape} svg`).style.display = "inline";
}

// Function to hide tick marks
function hideTicks() {
  for (let shape in shapes) {
    document.querySelector(`#${shape} svg`).style.display = "none";
  }
}

// Function to change the section
function changeSection(hide, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(show).style.display = "flex";
}
// Function to hide the next button
function hideNextButton() {
  document.getElementById("next-button").style.visibility = "hidden";
}
// Function to set the selected shape
function setSelectedShape() {
  document.getElementById("selected-shape").className =
    "shape " + localStorage.getItem("shape") + "-shape";
}
// Function to set the heading for input dimension section
function setHeading() {
  let selectedShape = localStorage.getItem("shape");
  document.getElementById("step-2-heading").innerHTML =
    shapes[selectedShape]["stepTwoHeading"];
  document.getElementById("shape-name").innerHTML =
    shapes[selectedShape]["shapeName"];
}
// Function to create results table
function createTable(enteredValue) {
  let selectedShape = localStorage.getItem("shape");
  let area = shapes[selectedShape].calculateArea(parseFloat(enteredValue));
  let perimeter = shapes[selectedShape].calculatePerimeter(
    parseFloat(enteredValue)
  );
  // Stored results
  let results = [
    [
      shapes[selectedShape]["dimension"],
      shapes[selectedShape]["dim_formula"],
      enteredValue + " " + shapes[selectedShape]["dim_unit"],
    ],
    [
      "AREA",
      shapes[selectedShape]["area_formula"],
      area + " " + shapes[selectedShape]["area_unit"],
    ],
    [
      "PERIMETER",
      shapes[selectedShape]["peri_formula"],
      perimeter + " " + shapes[selectedShape]["peri_unit"],
    ],
  ];
  // Creating the results table
  let table = "";
  for (let i = 0; i < 3; i++) {
    table += `<div class="grid-row">`;
    for (let j = 0; j < 3; j++) {
      table += `<span class="grid-column">${results[i][j]}</span>`;
    }
    table += `</div>`;
  }
  document.getElementById("output-grid").innerHTML = table;
}
function isValid(enteredValue) {
  return !isNaN(enteredValue) && enteredValue !== "";
}