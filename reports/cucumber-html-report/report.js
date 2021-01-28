$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dragAndDrop.feature");
formatter.feature({
  "line": 2,
  "name": "Drag and drop on heroku app",
  "description": "",
  "id": "drag-and-drop-on-heroku-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@temp"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "drag and drop exercise",
  "description": "",
  "id": "drag-and-drop-on-heroku-app;drag-and-drop-exercise",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "browser is on the drag and drop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user drags box A on top of box B",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "box A and box B will have switched spots",
  "keyword": "Then "
});
formatter.match({
  "location": "dragAndDrop.browser_is_on_the_drag_and_drop_page()"
});
formatter.result({
  "duration": 6751676000,
  "status": "passed"
});
formatter.match({
  "location": "dragAndDrop.user_drags_box_a_on_top_of_box_b()"
});
formatter.result({
  "duration": 80578100,
  "status": "passed"
});
formatter.match({
  "location": "dragAndDrop.box_a_and_box_b_will_have_switched_spots()"
});
formatter.result({
  "duration": 13550328200,
  "status": "passed"
});
});