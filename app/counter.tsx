import { useRouter } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";

export default function CounterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/idea")}>
        <Text style={styles.link}>Go to Idea screen</Text>
      </TouchableOpacity>
      <Text style={styles.text}>This is the Counter screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
  link: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: theme.colorTurquoise,
    marginBottom: 20,
    padding: 10,
  },
});
