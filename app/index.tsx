import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={styles.link}>
        Go to Counter
      </Link>
      <ShoppingListItem name="Chocolate" />
      <ShoppingListItem name="Cheese" isCompleted={true} />
      <ShoppingListItem name="Bread" isCompleted={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  link: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: theme.colorTurquoise,
    marginBottom: 20,
    padding: 10,
  },
});
