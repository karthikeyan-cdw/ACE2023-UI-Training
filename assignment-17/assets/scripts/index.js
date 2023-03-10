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
  $("#accordion").accordion({ heightStyle: "content" });
});
// Loading Location Table
$(document).ready(function () {
  $.getJSON("./assets/store/locations.json", function (locations) {
    locations.map((location) => {
      $("#locations").append(
        $("<div>", { class: "grid-row" }).append([
          $("<span>", { class: "grid-column" }).append(
            $("<img>", {
              src: flagsURL[location.country],
              alt: `${location.country} flag`,
            })
          ),
          $("<span>", { class: "grid-column" }).text(location.state),
          $("<span>", { class: "grid-column" }).text(location.city),
          $("<span>", { class: "grid-column" }).text(location.contact),
        ])
      );
    });
  }).fail(function () {
    alert("An error has occurred in loading JSON.");
  });
});
