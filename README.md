- [Description](#description)
- [Requirements](#requirements)
- [Getting started](#getting-started)

# Description

This sample shows an integration between the [NativeScript Push Notifications plugin](https://github.com/NativeScript/push-plugin) with [Telerik Platform](http://www.telerik.com/platform). 

# Requirements

   * Registration in [Telerik Platform](https://platform.telerik.com)
   * A new or existing app in your Platform account.
   * The project must be configured for push notifications as specified in the [documentation](http://docs.telerik.com/platform/backend-services/features/push-notifications/setup).

> In order to send a notification to a subset of users you will need a Telerik Platform [subscription plan](http://www.telerik.com/purchase/platform) that supports "Push to Segment".

# Running the sample

- Go to the /app folder and install dependencies

		tns install 	

- Go to `main-view-model.js` and set the correct settings:
	-	 Set your Telerik Platform App Id to the *apiKey* key at:

			self.everlive = new Everlive(options);
	-	 Android: Set your Google project number
 
			projectNumber: '<ENTER_YOUR_PROJECT_NUMBER>'
	- (Optional) If your Telerik Platform subscription does not support calls over HTTPS, set the `scheme` of the `Everlive` constructor to `http`. See the [link](#iOS-App-Transport-Security) below for more information about iOS.  
	
## Android

- Run the application

		tns run android

- Click Register to register the device in Telerik Platform and you can start sending push notifications from your account.

## iOS

- Set the correct bundle ID in the package.json at the root level of the project. The ID should be the same as in your Certificate for Push Notifications.

```javascript
	"nativescript": {
		"id": "com.telerik.PushNotificationApp",
		...
	}
````

- Run the application

		tns run ios
	  

### iOS App Transport Security 

#### Using Connection Encryption 

With the launch of iOS 9 iOS apps by default require that HTTP requests use a secure connection. The sample app is configured to use SSL encryption when communicating with the Telerik Platform API to manage the device registration. 

### Using Insecure Connection

If your Telerik Platform subscription does not allow for encrypted connection and for testing purposes, you may need to register an exception for the Telerik Platform notifications API URL (*api.everlive.com*). To do this add to the `<myapp>-info.plist` information property list file of the generated Xcode project the following keys and values:

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