import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorTurquoise }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => {
            return <Feather name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter screen",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="counter"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea screen",
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="lightbulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
