$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Validating Hdfc Home page",
  "description": "",
  "id": "validating-hdfc-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify HomePage",
  "description": "",
  "id": "validating-hdfc-home-page;verify-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open \"\u003cbrowser\u003e\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I naviagte to \"\u003curl\u003e\" url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ccicon and go to ccform page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 10
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cname\u003e\" into the name field",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cmobile\u003e\" into the mobile number field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cemail\u003e\" into the email field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "validating-hdfc-home-page;verify-homepage;",
  "rows": [
    {
      "cells": [
        "browser",
        "url",
        "name",
        "mobile",
        "email"
      ],
      "line": 18,
      "id": "validating-hdfc-home-page;verify-homepage;;1"
    },
    {
      "cells": [
        "firefox",
        "http://www.hdfcbank.com/",
        "vijay",
        "77777777777",
        "vijay@gmail.com"
      ],
      "line": 19,
      "id": "validating-hdfc-home-page;verify-homepage;;2"
    },
    {
      "cells": [
        "firefox",
        "http://www.hdfcbank.com/",
        "naresh",
        "9999999999",
        "naresh@gmail.com"
      ],
      "line": 20,
      "id": "validating-hdfc-home-page;verify-homepage;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Verify HomePage",
  "description": "",
  "id": "validating-hdfc-home-page;verify-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I naviagte to \"http://www.hdfcbank.com/\" url",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ccicon and go to ccform page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 10
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter \"vijay\" into the name field",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"77777777777\" into the mobile number field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"vijay@gmail.com\" into the email field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.i_open_browser(String)"
});
formatter.result({
  "duration": 8494708626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hdfcbank.com/",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.i_naviagte_to_url(String)"
});
formatter.result({
  "duration": 207447695,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_click_ccicon_and_go_to_ccform_page()"
});
formatter.result({
  "duration": 8936833232,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_twowheeler()"
});
formatter.result({
  "duration": 232317539,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_fill_the_details_and_calcuclate_elegibility(DataTable)"
});
formatter.result({
  "duration": 18095433330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 19061397987,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-PCC37BG\u0027, ip: \u002710.0.0.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ef9035ef-d1f4-4137-abfd-2f9fec40e1ab\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat com.cucumber.pages.SuperBikesPage.entername(SuperBikesPage.java:24)\r\n\tat com.cucumber.testcases.StepDefinitions.I_enter_into_the_name_field(StepDefinitions.java:59)\r\n\tat ✽.Given I enter \"vijay\" into the name field(homepage.feature:12)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7055 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:162)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat com.cucumber.pages.SuperBikesPage.entername(SuperBikesPage.java:24)\r\n\tat com.cucumber.testcases.StepDefinitions.I_enter_into_the_name_field(StepDefinitions.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:163)\r\n\tat cucumber.runtime.Runtime.run(Runtime.java:120)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCukes(TestNGCucumberRunner.java:43)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run_cukes(AbstractTestNGCucumberTests.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.MethodInvocationHelper$1.runTestMethod(MethodInvocationHelper.java:182)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.run(AbstractTestNGCucumberTests.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeHookable(MethodInvocationHelper.java:194)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:707)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\r\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\r\n\t... 73 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "77777777777",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_mobile_number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay@gmail.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Verify HomePage",
  "description": "",
  "id": "validating-hdfc-home-page;verify-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I naviagte to \"http://www.hdfcbank.com/\" url",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ccicon and go to ccform page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select twowheeler form page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill the details and calcuclate elegibility",
  "rows": [
    {
      "cells": [
        "location",
        "residency",
        "dobday",
        "emptype",
        "company",
        "income"
      ],
      "line": 10
    },
    {
      "cells": [
        "Hyderabad",
        "Hostel",
        "10",
        "Salaried",
        "WIPRO LTD",
        "40000"
      ],
      "line": 11
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter \"naresh\" into the name field",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter \"9999999999\" into the mobile number field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \"naresh@gmail.com\" into the email field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.i_open_browser(String)"
});
formatter.result({
  "duration": 6669194392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hdfcbank.com/",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.i_naviagte_to_url(String)"
});
formatter.result({
  "duration": 431771937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_click_ccicon_and_go_to_ccform_page()"
});
formatter.result({
  "duration": 9009146256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.select_twowheeler()"
});
formatter.result({
  "duration": 368349432,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_fill_the_details_and_calcuclate_elegibility(DataTable)"
});
formatter.result({
  "duration": 8238104138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naresh",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_name_field(String)"
});
formatter.result({
  "duration": 13246396366,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027lcform_name\u0027]\"}\nCommand duration or timeout: 10.16 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-PCC37BG\u0027, ip: \u002710.0.0.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 34e7c986-1081-4157-aa42-7a841eee9eee\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027lcform_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat com.cucumber.pages.SuperBikesPage.entername(SuperBikesPage.java:24)\r\n\tat com.cucumber.testcases.StepDefinitions.I_enter_into_the_name_field(StepDefinitions.java:59)\r\n\tat ✽.Given I enter \"naresh\" into the name field(homepage.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027lcform_name\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-PCC37BG\u0027, ip: \u002710.0.0.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/naveen/AppData/Local/Temp/anonymous2742609799609552443webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/naveen/AppData/Local/Temp/anonymous2742609799609552443webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_mobile_number_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "naresh@gmail.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.I_enter_into_the_email_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.I_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
});