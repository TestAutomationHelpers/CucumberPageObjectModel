Feature: Applying Two wheeler loan

Scenario Outline: Two wheeler loan

Given I open "<browser>" browser
When I naviagte to "<url>" url
And I click ccicon and go to ccform page
And select twowheeler form page
And I fill the details and calcuclate elegibility
|location|residency|dobday|emptype|company|income|
|Hyderabad|Hostel|10|Salaried|WIPRO LTD|40000|
And I enter "<name>" into the name field
And I enter "<mobile>" into the mobile number field
And I enter "<email>" into the email field
Then I click on submit button

Examples:
|browser|url					|name	|mobile		|email			|
|firefox|http://www.hdfcbank.com/|vijay|77777777777	|vijay@gmail.com|
|firefox|http://www.hdfcbank.com/|naresh|9999999999	|naresh@gmail.com|
