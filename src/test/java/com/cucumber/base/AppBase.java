package com.cucumber.base;

import java.io.FileInputStream;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class AppBase{
	public static WebDriver driver;	
	
	public void OpenBrowser(String browser){
		//applogs.debug("Browser opening");
		if(browser.equalsIgnoreCase("firefox")){			
			driver=new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		}else if(browser.equals("ie")){	
			System.setProperty("webdriver.ie.driver", "path");
			driver=new InternetExplorerDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		}else if(browser.equalsIgnoreCase("chrome")){
			System.setProperty("webdriver.chrome.driver", "path");
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
		}
	}
	
	public void navigate(String url){		
		driver.get(url);
		
	}
	
	public void type(String prop, String text){
		//applogs.debug("Entering data in the field");
		driver.findElement(By.xpath(prop)).sendKeys(text);	
	}
	
	public void select(String prop, String text){
		//applogs.debug("Selecting the option from the dropdown box");
		driver.findElement(By.xpath(prop)).sendKeys(text);
	}
	
	public void closeBrowser(){
		driver.quit();
	}
	
	public void click(String prop){
		//applogs.debug("Clicking on element");
		driver.findElement(By.xpath(prop)).click();
	}
		
	public void checktitle(String exptitle){
		String actualtitle=driver.getTitle();
		if(actualtitle.equalsIgnoreCase(exptitle)){
			System.out.println("Application title is correct: "+actualtitle);
		}else{
			System.out.println("Application title is wrong: "+actualtitle);
			System.out.println("But it should be : "+exptitle);
		}
	}
	
	public void selectwindow(){
		String popupwindow = null;
		Set<String> allwindowids=driver.getWindowHandles();
		Iterator<String> iter=allwindowids.iterator();		
		while(iter.hasNext()){
			popupwindow=iter.next();
		}
		driver.switchTo().window(popupwindow);
	}
	

}
