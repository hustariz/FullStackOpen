```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server


    user->>browser: Navigates to the Notes single page
 
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: The reload causes three more HTTP requests
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    browser->>browser: Executes JavaScript code
    browser->>browser: Parses notes data
    browser->>browser: Generates HTML elements for notes
    browser->>browser: Adds HTML elements to the page using DOM-API

    
    

    

