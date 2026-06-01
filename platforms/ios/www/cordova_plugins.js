cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-sim.Sim",
      "file": "plugins/cordova-plugin-sim/www/sim.js",
      "pluginId": "cordova-plugin-sim",
      "merges": [
        "window.plugins.sim"
      ]
    },
    {
      "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
      "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
      "pluginId": "cordova-plugin-inapppurchase",
      "clobbers": [
        "inAppPurchase"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    },
    {
      "id": "cordova-plugin-sign-in-with-apple.SignInWithApple",
      "file": "plugins/cordova-plugin-sign-in-with-apple/www/sign-in-with-apple.js",
      "pluginId": "cordova-plugin-sign-in-with-apple",
      "clobbers": [
        "cordova.plugins.SignInWithApple"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "com-sarriaroman-photoviewer.PhotoViewer",
      "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
      "pluginId": "com-sarriaroman-photoviewer",
      "clobbers": [
        "PhotoViewer"
      ]
    },
    {
      "id": "cordova-plugin-facebook-connect.FacebookConnectPlugin",
      "file": "plugins/cordova-plugin-facebook-connect/www/facebook-native.js",
      "pluginId": "cordova-plugin-facebook-connect",
      "clobbers": [
        "facebookConnectPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-sim": "1.3.3",
    "cordova-plugin-inapppurchase": "1.1.0",
    "cordova-plugin-googleplus": "8.5.2",
    "cordova-plugin-sign-in-with-apple": "0.1.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-statusbar": "2.4.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-sqlite-storage": "6.0.0",
    "com-sarriaroman-photoviewer": "1.2.4",
    "cordova-plugin-facebook-connect": "2.2.0"
  };
});