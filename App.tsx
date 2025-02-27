import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleRemove = () => {
    Alert.alert(
      "Are you sure you want to remove this item?",
      "It will be removed permanently.",
      [
        {
          text: "Yes, remove it",
          onPress: () => console.log("Item removed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Chocolate</Text>
        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorTurquoise,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
