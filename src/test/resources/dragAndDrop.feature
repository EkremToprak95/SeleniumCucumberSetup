
Feature: Drag and drop on heroku app

  Scenario: drag and drop exercise
    Given browser is on the drag and drop page
    When user drags box A on top of box B
    Then box A and box B will have switched spots
