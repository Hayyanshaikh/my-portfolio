## Firebase Configuration Setup

Clone karne ke baad, apko `config.js` file ko setup karna hoga jisme Firebase ki configuration details hongi.

1. **Firebase Configuration Fetch Kare:**

    - Apne Firebase project ki settings me jaye.
    - Firebase SDK snippet option select karein.
    - Firebase Config ko copy karein.

2. **`config.js` File Create Karein:**

    - `src/firebase/config.js` file ko create karein.
    - Neeche di gayi template ka istemal kar ke Firebase configuration details ko paste karein:

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

    Note: Apne Firebase project ki actual configuration values se template me di gayi placeholders ko replace karein.

3. **Save karein aur file ko commit karein.**

4. **Project ko run karein:**

    ```bash
    npm start
    ```

Ab aapka project Firebase ki configuration ke saath local environment me run hone ke liye tayar hai.
