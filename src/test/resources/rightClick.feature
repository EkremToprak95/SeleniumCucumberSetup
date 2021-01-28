
Feature: Right click

  Scenario: alertbox appears when you click on the box
    Given a webbrowser is on the context-menu page
    When user right clicks on the box
    Then alert will appear