## Firebase Configuration Setup

After cloning, you config.jswill need to setup the file which will contain the configuration details of Firebase

1. **Firebase Configuration Fetch Kare:**

    - Go to the settings of your Firebase project.
    - Firebase SDK snippet option select karein.
    - Copy the Firebase Config.

2. **`config.js` File Create Karein:**

    - `src/firebase/config.js` create the file.
    - Paste the Firebase configuration details using the template below:
    ```javascript
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    export default firebaseConfig;
    ```

**Note:** Replace the placeholders given in the template with the actual configuration values of your Firebase project.