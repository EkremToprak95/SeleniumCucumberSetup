# SeleniumCucumberSetup

pre-requirement: 
    -Intellij installed 
    -Maven installed 
    -git installed

1. Create a new maven project

2. Add the following dependencies to your pom file:
   (Found on: https://mvnrepository.com/ or right click in your pom.xml file and click generate):
   Junit selenium-java cucumber-junit cucumber-java junit-jupiter-api commons-io

Add the following plugins to your pom file: maven-compiler-plugin maven-surefire-plugin

In your Intellij explorer -Create a package in src/test/java and name it bindings -Create a package in src/test/java and name it runners -Create a directory in src/test and name it resources -Right click on resources from the pervious and choose Mark Directory as -> Test Resources Root

Open your terminal in Intellij and execute: mvn clean install

Install the following plugins via File -> settings -> plugins -Cucumber for java -Gherkin