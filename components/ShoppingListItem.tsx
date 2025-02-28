import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
  const handleRemove = () => {
    Alert.alert(
      `Are you sure you want to remove ${name}?`,
      "It will be deleted permanently.",
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleRemove}
      >
        <AntDesign name="closecircle" size={24} color={isCompleted ? theme.colorGrey : theme.colorRed} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorTurquoise,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  completedText: { textDecorationLine: "line-through" },
});
