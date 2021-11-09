How to build

1.open terminal
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

2.cd android

3.type ./gradlew assembleDebug

4.yourProject/android/app/build/outputs/apk/debug/app-debug.apk