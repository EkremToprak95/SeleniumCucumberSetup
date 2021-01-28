package bindings;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
public class rightClick {
    ChromeDriver driver = null;
    @Given("a webbrowser is on the context-menu page")
    public void a_webbrowser_is_on_the_context_menu_page() {
        driver = new ChromeDriver();
        driver.get("https://the-internet.herokuapp.com/context_menu");
    }

    @When("user right clicks on the box")
    public void user_right_clicks_on_the_box() {
        Actions action = new Actions(driver);
        WebElement el = driver.findElement(By.id("hot-spot"));
        action.contextClick(el).perform();
    }

    @Then("alert will appear")
    public void alert_will_appear() {
        driver.switchTo().alert().accept();
    }

}
