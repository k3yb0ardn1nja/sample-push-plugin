# Telerik Push Notifications Plugin for NativeScript Sample App

<a id="top"></a>
- [Overview](#overview)
- [Requirements](#requirements)
- [Configuration](#configuration)
- [Running the Sample](#running-the-sample)

# Overview

You need to enable the [Telerik Push Plugin for NativeScript](https://github.com/NativeScript/push-plugin) when building NativeScript apps in [Telerik Platform](http://www.telerik.com/platform) if you want them to support push notifications.

This sample app shows how to build an app using the plugin.

# Requirements

   * **An active [Telerik Platform](https://platform.telerik.com) account** Ensure that you can log in to a Telerik Platform account. This can be a free trial account. To send a notification to a subset of users you will need a [subscription plan](http://www.telerik.com/purchase/platform) that supports "Push to Segment".
   * **A new or existing Telerik Platform app in your account.**

# Configuration

You need to perform several settings before you can run the app. The configurations steps depend on the platform on which you will be running it.

## Android

Take these steps to run the app on Android:

1. Ensure that you have configured your app for push notifications as described in [Enabling Push Notifications](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/push-enabling).
2. Go to the sample app's `app` folder. 
3. Install dependencies using this command:

	```
	tns install
	```

4. Open `main-view-model.js` and set your account settings:
	- Set your Telerik Platform App ID to the *apiKey* key:

		```
		self.everlive = new Everlive('<ENTER_YOUR_API_KEY_HERE>');
		```

	- Set your Google project number:

		``` 
		projectNumber: '<ENTER_YOUR_PROJECT_NUMBER>'
		```
	- (Optional) If your Telerik Platform subscription does not support calls over HTTPS, set the `scheme` of the `Everlive` constructor to `http`.

## iOS

Take these steps to run the app on iOS:

1. Ensure that you have configured your app for push notifications as described in [Enabling Push Notifications](http://docs.telerik.com/platform/backend-services/javascript/push-notifications/push-enabling).
2. Go to the sample app's `app` folder. 
3. Install dependencies using this command:

	```
	tns install
	```

4. Open `main-view-model.js` and set your Telerik Platform App ID to the *apiKey* key:

		```
		self.everlive = new Everlive('<ENTER_YOUR_API_KEY_HERE>');
		```

5. Set the correct bundle ID in `package.json` at the root level of the NativeScript project. The ID must match the the value Apple App ID value.

	```javascript
		"nativescript": {
			"id": "com.telerik.PushNotificationApp",
			...
		}
	```` 


### iOS App Transport Security 

With the launch of iOS 9, the default setting for all iOS apps is to mandate a secure HTTP connection for outgoing requests. This sample app is configured to use SSL encryption when communicating with the Telerik Platform API to manage the device registration.

If your Telerik Platform subscription does not allow for encrypted connections or for testing purposes, you may need to register an exception for the Telerik Platform notifications API URL (*api.everlive.com*).

To do this:

1. Open `main-view-model.js` and set the `scheme` of the `Everlive` constructor to `http`.
2. Add the following keys and values to the `<myapp>-info.plist` file containing the information property list of the generated Xcode project:

```
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>api.everlive.com</key>
    <dict>
      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
      <true/>
  </dict>
  </dict>
</dict>
```

# Running the Sample

Take these steps to run the sample app:

1. Execute the following NativeScript CLI command:
	- On an iOS device:
	
		```
		tns run android
		```

	- On an Android device:
	
		```
		tns run ios
		```

2. On the device, click **Register** to register the device with Telerik Platform.
3. Start sending push notifications from your Telerik Platform account.
