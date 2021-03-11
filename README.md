## #18-online-offline-budget-tracker-pwa-indexedDB
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Budget Tracker application allows for offline data capture before being syncaccess and functionality: add expenses, deposits to budget with/out connection.</h3>

<p>Github Repository Page: https://github.com/palowenstein/online-offline-budget-tracker-pwa-indexedDB</p>
<p>Heroku Deployment Page: https://pwa-off-online-budget-tracker.herokuapp.com/</p>

# Table of Contents
  * [GIF](#GIF)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contributions](#Contributions)  
  * [Contact](#Contact)


## GIF
![Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)](./demo_assets/18-1-online-offline-budget-tracker-pwa-indexedDB-application-demo.gif "Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)")
<p>Fig. 1. Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)</p>




Add functionality to our existing Budget Tracker application to allow for offline access and functionality.
The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.


## Business Context
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria
1 a user is on Budget App without internet connection
2 the user inputs withdrawal or deposit
3 to be shown on page + added to transaction history when back online.


## Overview
<ul>
<li>The heroku accessible budget tracker enables the following actions:
  <ul>
    <li>Enter deposits offline.</li>
    <li>Enter expenses offline.</li>
    <li>Offline entries added to data collection when online (internet) access is resumed.</li>
  </ul> 
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, Macintosh .DS_Store files.</li>
<li>For this application to run locally, MongoDB must be installed and running in the background as seen in the terminal screen capture below. The application will not run correctly without a valid MongoDB install.</li>
<li>The end user must first execute the package.json file located in the root folder of the application. This can be done in Apple's Terminal via the <kbd>npm install command</kbd> and will install the required dependencies (Express, Mongoose schema, Morgan middleware) needed for the program to run.</li>
<li>For the application to run in an heroku environment, a <strong>Procfile</strong> file with the startup instruction <kbd>node server.js</kbd> has been placed into the application folder.</li>
</ul>

![Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — MongoDB Background Execution / Apple Terminal (PNG)](./demo_assets/18-2-online-offline-budget-tracker-mongoDB-background-execution.png "Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — MongoDB Background Execution / Apple Terminal (PNG)")
<p>Fig. 2. Background execution of MongoDB in Apple's Terminal. MongoDB is called via the <kbd>mongo</kbd> command.</p>

## Instructions
<ul>
<li>Makes sure MongoDB is installed locally and running in the background as seen in Fig.2.</li>
<li>In Terminal, locate the application's root directory and enter it via the <kbd>cd</kbd> command: <kbd>cd online-offline-budget-tracker-pwa-indexedDB</kbd>.
<li>Still in the root directory, run the <kbd>npm install</kbd> command to install the necessary node modules (mongoose, morgan, express, lite-server) from the package.json.</li>
<li>In the same root directory, run the <kbd>node server.js</kbd> command to launch the application.</li>
<li>This will launch the application which, in terminal, will indicate <code>App running on port 4000!</code>.
<li>You can now access the application in your browser by loading <code>localhost:4000</code> from the address bar.</li>
<li>When run initially, the budget tracker will be blank of any data.</li>
<li>Enter transactions in the input fields (name / amount) then valid it each either as a positive or negative transaction (add / remove funds).</li>
<li>Without internet access, add more transactions to the budget tracker.</li>
<li>With your internet access now back, refresh the page. This will send the previously offline data to the MongoDB collection which will be updated with that new information.</li>
</ul>


## Screenshots
![Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Browser Interface (JPG)](./demo_assets/18-3-online-offline-budget-tracker-pwa-indexedDB-browser-interface.jpg "Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Browser Interface (JPG)")
<p>Fig. 3. "Workout Stats" page during initial use. Populated with information extracted from seeders/seed.js.</p>

![Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — MongoDB collection reflecting the data entered via the browser application (Robo 3T) (JPG)](./demo_assets/18-3-online-offline-budget-tracker-pwa-indexedDB-mongodb-online-collection-robo3t.jpg "Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — MongoDB collection reflecting the data entered via the browser application (Robo 3T) (JPG)")
<p>Fig. 4. MongoDB collection reflecting the data entered via the browser application (Robo 3T)</p>

## Video
![Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)](./demo_assets/18-4-online-offline-budget-tracker-pwa-indexedDB-application-demo.mp4 "Budget Tracker (MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)")
<br />

## References
<ul>
	<li>MongoDB + Mongoose (NoSQL).</li>
	<li>Node.js Javascript Library.</li>
	<li>Express for GET/POST/DELETE Requests between REST APIs.</li>
	<li>Morgan Middleware.</li>
  <li>Lite Server</li>
	<li>Package.JSON / NPM for installing dependencies.</li>
</ul>

## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2021] Pierre André Lowenstein
</p>

## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

## Contact
<p>
<a href="https://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:coder@pierreandrelowenstein.com" title="Courriel / E-Mail">[e-mail] Send me a 'courriel'</a>
</p>