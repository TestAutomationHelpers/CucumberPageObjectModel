package com.cucumber.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/com/cucumber/testcases/",
glue="com.cucumber.testcases",format={"html: reports"})
public class SuiteRunner1 extends AbstractTestNGCucumberTests{

}
