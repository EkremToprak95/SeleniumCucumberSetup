# SeleniumCucumberSetup

0. pre-requirements:
    - Install JDK and set Environment JAVA_HOME variable
    - Install Intellij  
    - Install Maven and add its bin folder to the windows PATH variable (C:\Program Files\Maven\apache-maven-3.6.3\bin)
    - Install GIT

1. Open Intellij and create a new maven project

2. Add the following dependencies to your pom file:
   (Found on: https://mvnrepository.com/ or right click in your pom.xml file and click generate):
   - Junit 
   - selenium-java 
   - cucumber-junit 
   - cucumber-java 
   - junit-jupiter-api 
   - commons-io

3. Add the following plugins to your pom file: 
    - maven-compiler-plugin 
    - maven-surefire-plugin

4. In your Intellij explorer:
    - Create a package in src/test/java and name it bindings 
    - Create a package in src/test/java and name it runners 
    - Create a directory in src/test and name it resources 
    - Right click on resources from the pervious and choose Mark Directory as -> Test Resources Root

5. Open your terminal in Intellij and execute: mvn clean install

6. Install the following plugins via File -> settings -> plugins 
    - Cucumber for java 
    - Gherkin
