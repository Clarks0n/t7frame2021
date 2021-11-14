import { BackHandler, ToastAndroid, Platform } from "react-native";

let count = 0;

const BackExit = () => {
    if (Platform.OS === "ios") return;

    count++;
    if(count === 1) {
        ToastAndroid.show(
            "Press back again to close!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    } else {
        BackHandler.exitApp();
        count = 0;
    }

    setTimeout(() => {
        count = 0;
    }, 2000);

    return true;
};

/* Using Alert
const BackExit = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
};
*/

export default BackExit
