package bindings;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;


public class dragAndDrop {
    ChromeDriver driver = null;
    WebElement from = null;
    WebElement to = null;
    Actions action;

    @Given("browser is on the drag and drop page")
    public void browser_is_on_the_drag_and_drop_page() {
        driver = new ChromeDriver();
        driver.get("https://the-internet.herokuapp.com/drag_and_drop");
    }

    @When("user drags box A on top of box B")
    public void user_drags_box_a_on_top_of_box_b() {
        from = driver.findElement(By.id("column-a"));
        to = driver.findElement(By.id("column-b"));
    }

    @Then("box A and box B will have switched spots")
    public void box_a_and_box_b_will_have_switched_spots() {
        action = new Actions(driver);
        action.dragAndDrop(from,to).build().perform();
        driver.quit();
    }
}
