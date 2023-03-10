// Inserting the tabs JQuery UI Component
let flagsURL = {
  "United States": "./assets/images/usa.png",
  India: "./assets/images/india.png",
  Canada: "./assets/images/canada.png",
};
// Inserting Tabs Component
$(function () {
  $("#tabs").tabs();
});
// Inserting Accordion Component
$(function () {
  $("#accordion").accordion({ heightStyle: "centent" });
});
// Loading Location Table
$(document).ready(function () {
  let locations_table = "";
  $.getJSON("./assets/store/locations.json", function (locations) {
    locations.map((location) => {
      locations_table += `<div class="grid-row">
      <span class="grid-column">
      <img src="${flagsURL[location.country]}" alt="${location.country}"/>
      </span>
      <span class="grid-column">${location.state}</span>
      <span class="grid-column">${location.city}</span>
      <span class="grid-column">${location.contact}</span>
      </div>`;
    });
    document.getElementById("locations").innerHTML = locations_table;
  }).fail(function () {
    alert("An error has occurred in loading JSON.");
  });
});
