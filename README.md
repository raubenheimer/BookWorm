# Book Worm React Native App
This repository contains a mock book review react native app. It is based on a  [net ninja tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ). This app was made for my Zaio code bootcamp deliverable 3. The app's APK file can be found in the APK folder. Step-by-step instructions on how to deploy the app on both the App and Play store can be found below.

1. [ Play Store. ](#desc)
2. [ App Store. ](#usage)
3. [ References. ](#ref)

**Please Note:**
This React Native App was developed with the use of an Iphone X running the expo app. Running it on an Android device might not look as pretty as it was intended to. It is thus recommended that the app should be run on an Iphone.

## Instruction for deployment

<a name="desc"></a>
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

<a name="usage"></a>
### App Store
#### Prerequisites
1. Project that is ready for submission and passes Apple’s App Store Guidelines
2. Valid Apple developer program account (not the Apple Developer Enterprise Program)
3. Computer that runs Mac OS X
4. The following programs installed: Xcode and Keychain Access

#### Steps
1. Create a Bundle Identifier
    1. In your browser, navigate to Apple’s [Developer Portal](https://developer.apple.com/account/overview.action)
    2. Log in
    3. Click Identifiers
    4. Click the “+” in the top right of the screen
    5. Name the App ID the same as your app
    6. Make sure the Bundle ID follows the standard naming convention: com.yourcompanyname.yourappname
    7. Check any App Services the app needs, click Continue
    8. Verify the services are correct, then click Submit

2. Create a Certificate Signing Request
    1. Open a program called KeyChain Access
    2. In the top left menu, click Certificate Assistant
    3. Click Request a Certificate From a Certificate Authority…
    4. User email: Enter your email address
    5. Common Name: We recommend using the name of the app
    6. CA email is not actually required
    7. Check Saved to Disk, click Continue
    8. Save the Certificate Signing Request for later

3. Create an App Store Production Certificate
    1. In your browser, navigate to Apple’s Developer Portal
    2. Click Certificates
    3. Click the “+” in the top right of the screen
    4. Click the App Store Production
    5. Currently named “App Store and Ad Hoc” under Production
    6. Click Continue
    7. Upload the Certificate Signing Request created earlier
    8. Download the Certificate
    9. Install the certificate on your computer by double-clicking
    10. Keep this file somewhere safe
    
4. Create a Production Provisioning Profile
    1. In your browser, navigate to Apple’s Developer Portal
    2. Log in
    3. Click Provisioning Profiles
    4. Click the “+” in the top right of the screen
    5. Click the App Store Distribution option, click Continue
    6. Select the Bundle ID created earlier, click Continue
    7. Select the Certificate created earlier, click Continue
    8. Make sure the Profile Name follows the standard naming convention: App Name App Store Distribution
    9. Click Generate
    10. Download it
    11. Install the provision profile on your computer by double-clicking
    12. Keep this file somewhere safe

5. Create App Store Listing
    1. Start in your browser, navigate to iTunes Connect
    2. Log in
    3. Click My Apps
    4. Click the “+” in the top left of the screen
    5. Click “New iOS App”
    6. Bundle ID: choose the one created on Developer Portal
    7. For convenience, make the SKU match the Bundle ID created earlier
    8. Click Create to create the first version listing

6. Make the release build
    1. Start Xcode
    2. Open the project or workspace
    3. Update the version and build numbers
    4. Open Build Settings
    5. Make sure All settings is selected
    6. Scroll to Code Signing
    7. Use the provisioning profile created earlier
    8. Use the code signing identity created earlier
    9. In the top menu, select Generic iOS Device as the build destination if no actual device is connected
    10. Menu, Project, Archive
    11. Click Distribute
    12. Sign in as your apple developer account
    13. Submit to app store
    14. Wait for the confirmation

7. Fill In Version Information
    1. Enter all of the information assembled in step 1
    2. Select the build you wish to tie to the version (Note: This usually appears 10-15 minutes after sending from Xcode)
    3. Fill in pricing information
    4. Click Save
    5. Fit any errors based on the messages that appear and save changes

8. Submit Version for Review
    1. Select the release type
    2. Manual release – after the app is accepted, a Release button will appear
    3. Automatic release – as soon as the app is accepted, it will be released
    4. Wait for approval
    5. This process usually takes 2-3 weeks for a new submission
    6. If your app was not approved, review the notes in the Resolution Center and make any necessary changes to the app or version information then resubmit

9. Release
    1. If you selected Manual release, click Release your app when ready
    2. Wait for the green “Ready for Sale” version status (This might take from 1 hour to 1 day after release)
    3. Search for your app on the App Store

<a name="ref"></a>
## References
The step-by-step guide for the play store was sourced form [here](https://docs.expo.io/versions/v36.0.0/distribution/uploading-apps/) and [here](https://support.google.com/googleplay/android-developer/answer/113469).
The step-by-step guide for the app store was sourced from [here](https://clearbridgemobile.com/how-to-submit-an-app-to-the-app-store/)