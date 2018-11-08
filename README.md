# Zippity Customer Check-in 

A progressive web app that works in a browser and as a mobile app. The app handles the check in process for Zippity customers in need of car care service.

## What's inside?

The main files in the app are:  

- [public/index.html](public/index.html) The main view / login page.
- [public/index.html](public/checkin.html) The main page for the check-in process.
- [public/style/style.css)](public/styles/materialize.css) Styling.
- [public/scripts/app.js](public/scripts/app.js) Contains the javascript to handle logic and webAuth.
- [public/service-worker.js](public/service-worker.js) This lists files to cache locally.

<img src="images/ZippityTeam.png" width="400" border="3" style="border-radius: 10px;">

## Want to edit the app?

- Clone or download this repo
- Open `index.html` within the public folder
- Install a service worker for your browser, if you haven't already (eg [Web Server for Chrome](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#install_and_verify_web_server))
- Browsers may also ask if you want to include the app on your homescreen

## Hosting

- Sign up to firebase  
- Download and install the firebase CLI tools  
- Within your project folder:
  - `firebase init`
  - `firebase deploy`

[More instructions for deploying to firebase](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#deploy_to_firebase)

## Here is the app's core architecture

```
├── README.md
├── firebase.json
└── public
    ├── fonts
    │   └── roboto
    │       └── ...
    ├── images
    │   └── icons
    │       └── ...
    ├── index.html
    ├── manifest.json
    ├── scripts
    │   ├── app.js
    │   ├── jquery-3.3.1.js
    │   └── materialize.js
    ├── service-worker.js
    └── styles
        ├── materialize.css
        └── style.css
```

- [JQuery](https://jquery.com/) A library for supporting quick and easy javascipt in your website
- For styling, this has materialize.js and css from [materializecss.com](http://materializecss.com/). Remove or replace it if you prefer something different.
- [public/service-worker.js](public/service-worker.js) Currently this will cache the app's files for quick local access. Read more about Service Workers [here](https://developers.google.com/web/fundamentals/primers/service-workers/).
- [public/manifest.json](public/manifest.json) A JSON file specifies how your app appears to the user in the areas that they would expect to see apps (for example the mobile home screen), direct what the user can launch and more importantly how they can launch it. Read more about this [here](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#support_native_integration).

Thank you!