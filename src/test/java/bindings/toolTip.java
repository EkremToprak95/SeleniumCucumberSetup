package bindings;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
public class toolTip {
    ChromeDriver driver = null;
    WebElement microphone = null;

    @Given("a webbrowser is on the google homepage")
    public void a_webbrowser_is_on_the_google_homepage() {
        driver = new ChromeDriver();
        driver.get("https://www.google.com/");
    }

    @When("user hover over the microphone icon")
    public void user_hover_over_the_microphone_icon() {
        microphone = driver.findElement(By.className("hpuQDe"));
    }

    @Then("tool tip will be shown")
    public void tool_tip_will_be_shown() {
        microphone.getAttribute("aria-label").equals("Gesproken zoekopdracht");
    }
}
