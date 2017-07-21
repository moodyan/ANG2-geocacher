# Geocacher

#### _App created for Epicodus Independent Project, JavaScript - Week Four. Practice using Angular CLI with Web APIs. July 21st, 2017_

#### By **Alyssa Moody**

## Description

_An app that manages the listings of various Geocaching sites._

## Program Specifications

| Description  | Input Example | Output Example |
| ------------- | ------------- | ------------- |
| The program allows users to enter in the latitude and longitude of a known geocache and receive the closest corresponding physical address of its location.  | Lat/Long  | Returns a single listing.  |
| The program allows users to enter in the physical address of a geocache that they have hidden and receive the corresponding latitude and longitude.  | Address  | Lat/Long  |
| The program allows users to save information about geocaches to the site by either the latitude and longitude or by the physical address of its location.  | Save  | List of saved geocaches  |

## Setup/Installation Requirements

**CLONING PROJECT**
Node.js with NPM: Check with **node -v**. Otherwise, download [Node](https://nodejs.org/en/download/).

Angular 4 CLI: Ensure you have Angular 4 installed by running > **ng -v**. If you do not have Angular 4, download [Angular CLI](https://github.com/angular/angular-cli).

**From GitHub:** Download or clone project repository onto desktop from GitHub.

In the terminal, cd into the project folder. Enter the following commands:

| Package | Terminal Command |
|:---:|:---:|
| npm |$ npm install |
| bower |$ bower install |

Firebase:
- install Firebase `npm install angularfire2@4.0.0-rc.0 firebase --save`
- install promise-polyfill patch `npm install promise-polyfill --save-exact`
- You will need a [Firebase API](https://firebase.google.com/) key to run this code.
    - Go to the website and create a free account. (Links to your gmail if you have one.)
    - In the user dashboard area, select the option `create a new project` and provide the name `database name here`.
    - You'll be taken to an "Overview" area. Select the option `add Firebase to your web app`.
    - In the project, in the src/app folder, create a file and name it `api-keys.ts`.
    - Paste the information from the firebase pop-up window into this format:
          export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
          };
    - Back in Firebase, go to the Database area by selecting the Database option from the navbar on the left-hand side. Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
    - Change both the ".read", and ".write" properties here to "true" like this:<br> `
    {
      "rules": {
        ".read": "true",
        ".write": "true"
      }
    }`
- You will also need a [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) key.
  - Go to the website and select `Request a Key` in the upper right hand corner.
  - Select the project you just set up in Firebase from the pop-up window, and copy the key that it gives you.
  - In the `api-keys.ts` project folder, below the firebase key, paste the key in the following format, replacing {YOUR_KEY_HERE} with the key they gave you:
          export const marsRoverKey = "{YOUR_KEY_HERE}"

Enter the command > **ng build**

Enter the command > **ng serve**

_Visit http://localhost:4200/ in your preferred browser and you will see the application._


## Known Bugs

_No known bugs._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, please contact Alyssa Moody at alyssanicholemoody@gmail.com_

## Technologies Used

**Languages:** HTML, CSS, JavaScript/TypeScript

**Package Managers:** NPM and Bower

**Frameworks/Libraries:** Angular2

**Database Management:** Firebase

**APIs:** Google Geocaching

### License

*MIT license Agreement*

Copyright (c) 2017 **_Alyssa Moody_*
