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
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "validating-hdfc-home-page;verify-homepage;",
  "rows": [
    {
      "cells": [
        "browser",
        "url"
      ],
      "line": 10,
      "id": "validating-hdfc-home-page;verify-homepage;;1"
    },
    {
      "cells": [
        "firefox",
        "http://www.hdfcbank.com/"
      ],
      "line": 11,
      "id": "validating-hdfc-home-page;verify-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});