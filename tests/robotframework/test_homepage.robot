*** Settings ***
Library   SeleniumLibrary
Suite Setup   Open Browser To Home Page
Suite Teardown  Close Browser

*** Variables ***
${HOME PAGE URL}      http://localhost:3000
${BROWSER}        Chrome

*** Test Cases ***
Home Page
    Home Page Should Be Open

*** Keywords ***
Home Page Should Be Open
    Title Should Be    taiprogramer's homepage

Open Browser To Home Page
    Open Browser    ${HOME PAGE URL}    ${BROWSER}
