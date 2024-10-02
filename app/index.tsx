import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text style={{fontSize: 24}}>Aora!!!💪🚀🧪 !!!!!!</Text>
            <StatusBar style="auto"/>
            <Link href="/profile" className="text-2xl">Go to Profile</Link>
        </View>
    )
}
