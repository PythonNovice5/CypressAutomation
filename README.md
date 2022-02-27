# CypressAutomation
## Pre-requisites:
- Node should be installed
- NODE_HOME should be set in environment variables
- Cypress should be installed
- Operating System used is Windows
- git installed

## How to run?

Open Command prompt, clone the repo and go inside CypressAutomation directory to run tests

```bash
git clone https://github.com/PythonNovice5/CypressAutomation.git
cd CypressAutomation
```
### Run tests in cmd
Inside `CypressAutomation` directory run the test using below command:
```bash
.\node_modules\.bin\cypress run --spec "cypress\integration\2-advanced-examples\single_file_execution.js" --headed
```
OR
```bash
.\node_modules\.bin\cypress run --spec "cypress\integration\2-advanced-examples\mail_test.js" --headed
```
### In Testrunner

Open Cypress using below command in cmd:
```bash
.\node_modules\.bin\cypress open
```
Under `2-advanced-examples` click on any of the below test files you want to execute in Test runner:
mail_test,
![image](https://user-images.githubusercontent.com/25523526/155897627-d628dfec-d4a8-48e9-8554-a1dd13c4826b.png)







