import { View } from "react-native";
import { Appbar, List, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Weeks() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Weeks" />
      </Appbar.Header>
      <View>
        <List.Section>
          {Array.from({ length: 8 }, (_, i) => (
            <List.Item
              titleStyle={{ color: "black" }}
              key={i}
              title={`Week ${i + 1}`}
            />
          ))}
        </List.Section>
      </View>
    </View>
  );
}
