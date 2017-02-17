package com.cucumber.testcases;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import com.cucumber.base.AppBase;
import com.cucumber.pages.GetelegibilityPage;
import com.cucumber.pages.HomePage;
import com.cucumber.pages.SuperBikesPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions extends AppBase{
	AppBase cucumber=new AppBase();
	@Given("^I open \"(.*?)\" browser$")
	public void i_open_browser(String browser) throws Throwable {
	   System.out.println("I open "+browser+" browser");
	   cucumber.OpenBrowser(browser);
	}

	@When("^I naviagte to \"(.*?)\" url$")
	public void i_naviagte_to_url(String url) throws Throwable {
		System.out.println("I naviagte to "+url+" url");
		cucumber.navigate(url);
	}

	@When("^I click ccicon and go to ccform page$")
	public void i_click_ccicon_and_go_to_ccform_page() throws Throwable {
	    System.out.println("I click ccicon and go to ccform page");	 
	    HomePage hp=PageFactory.initElements(driver, HomePage.class);	    
	    hp.gotoelegibility();
	}
	@And("^select twowheeler form page$")
	public void select_twowheeler(){
		System.out.println("select twowheeler form page");
		cucumber.selectwindow();
	}
	
	@Given("^I fill the details and calcuclate elegibility$")
	public void i_fill_the_details_and_calcuclate_elegibility(DataTable table) throws Throwable {
	   List<List<String>> data= table.raw();
	   for(int i=0;i<=data.size();i++){
		   System.out.println(data.get(0).get(i));
	   }
	   GetelegibilityPage gp=PageFactory.initElements(driver, GetelegibilityPage.class);
	   gp.gotoDecidetoApply(data.get(1).get(0), data.get(1).get(1), data.get(1).get(2), data.get(1).get(3), data.get(1).get(4), data.get(1).get(5));
	}

	@Given("^I enter \"([^\"]*)\" into the name field$")
	public void I_enter_into_the_name_field(String name) throws Throwable {
	   System.out.println("I enter "+name+" into the name field");	
	   SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
	   Thread.sleep(3000);
	   sp.entername(name);
	}

	@Then("^I enter \"([^\"]*)\" into the mobile number field$")
	public void I_enter_into_the_mobile_number_field(String mobile) throws Throwable {
	    System.out.println("I enter "+mobile+" into the mobile number field");	  
	    SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
		sp.entermobile(mobile);
	}

	@Then("^I enter \"([^\"]*)\" into the email field$")
	public void I_enter_into_the_email_field(String email) throws Throwable {
	   System.out.println("I enter "+email+" into the email field");	
	   SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);
	   sp.enteremail(email);
	}

	@Then("^I click on submit button$")
	public void I_click_on_submit_button() throws Throwable {
	  System.out.println("I click on submit button");
	  SuperBikesPage sp=PageFactory.initElements(driver, SuperBikesPage.class);	 
	  sp.clicksubmit();
	  driver.quit();
	}

}
