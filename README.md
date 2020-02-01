# Book Worm React Native App
This repository contains a mock book review react native app. It is based on a  [net ninja tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ). This app was made for my Zaio code bootcamp deliverable 3.
## Instruction for deployment
### Play Store
#### Create a Google Service Account
1.  Open your [Google Play Console](https://play.google.com/apps/publish/).
2. Click the Settings menu entry, followed by API access.
3. Click the CREATE SERVICE ACCOUNT button. If you see a message saying API access is not enabled for your account, you must first link your Google Play developer account with a Google Developer Project. On this page, either link it to an existing project if you have one, or click CREATE NEW PROJECT to link with a new one.
4. Follow the Google API Console link in the dialog
    1. Click the CREATE SERVICE ACCOUNT button
    2 .Enter the name of this service account in the field titled "Service account name". We recommend a name that will make it easy for you to remember that it is for your Google Play Console account. Also, enter the service account ID and description of your choice.
    3. Click Select a role and choose Service Accounts > ServiceAccount User
    4. Check the Furnish a new private key checkbox
    5. Make sure the "Key type" field is set to JSON
    6. Click SAVE to close the dialog
    7. Make a note of the filename of the JSON file downloaded to your computer. You'll need this to upload your app later. Be sure to keep this JSON file secure, as it provides API access to your Google Play developer account.
5. Return to the API access page on the Google Play Console and ensure it shows your new service account.
6. Click on Grant Access for the newly added service account
7. Choose Release Manager from the newly added service account
8. Click ADD USER to close the dialog

#### Manually upload your app for the first time
1. Open your [Google Play Console](https://play.google.com/apps/publish/).
2. Select All applications > Create application.
3. Select a default language and add a title for your app. Type the name of your app as you want it to appear on Google Play.
4. Create your app's [store listing](https://support.google.com/googleplay/android-developer/answer/113469#store_listing), take the content [rating questionnaire](https://support.google.com/googleplay/android-developer/answer/188189), [set up pricing and distribution](https://support.google.com/googleplay/android-developer/answer/6334373).
5. Create a release
    1. Open your [Google Play Console](https://play.google.com/apps/publish/).
    2. Select an app.
    3. On the left menu, select Release management > App releases.
        * If you don't see App releases in the menu, make sure you have [permission to manage releases](https://support.google.com/googleplay/android-developer/answer/2528691#definitions).
    4. Next to the release type you want to create, select Manage. You can select between:
        * Internal test: Create an internal test release to quickly distribute your app for internal testing and quality assurance checks.
        * Closed: Create a closed release to test pre-release versions of your app with a larger set of testers. Once you've tested with a smaller group of employees or trusted users, you can expand your test to an open release. On your App releases page, an Alpha track will be available as your initial closed test. If needed, you can also create and name additional closed tracks.
        * Open: Create an open release after you've tested a closed release. Your open release can include a wider range of users for testing, before your app goes live in production.
        * Production: When you create a production release, this version of your app is available to all users in the countries you've targeted.
    5. To create a new release, select Create release.
6. Prepare your app's release
    1. Follow the on-screen instructions to add APKs or app bundles, describe what's new in this release, and name your release. For more information on any of these fields, select the matching section heading below.
    2. To save any changes you make to your release, select Save.
    3. When you've finished preparing your release, select Review.

### App Store

source: [Instructions](https://docs.expo.io/versions/v36.0.0/distribution/uploading-apps/)