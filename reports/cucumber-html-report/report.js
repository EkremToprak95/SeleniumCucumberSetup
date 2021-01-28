$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("toolTip.feature");
formatter.feature({
  "line": 2,
  "name": "Tooltip",
  "description": "",
  "id": "tooltip",
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
  "name": "hovering over a microphone icon will give information",
  "description": "",
  "id": "tooltip;hovering-over-a-microphone-icon-will-give-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a webbrowser is on the google homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover over the microphone icon",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "tool tip will be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "toolTip.a_webbrowser_is_on_the_google_homepage()"
});
formatter.result({
  "duration": 6997963300,
  "status": "passed"
});
formatter.match({
  "location": "toolTip.user_hover_over_the_microphone_icon()"
});
formatter.result({
  "duration": 63967100,
  "status": "passed"
});
formatter.match({
  "location": "toolTip.tool_tip_will_be_shown()"
});
formatter.result({
  "duration": 39110400,
  "status": "passed"
});
});