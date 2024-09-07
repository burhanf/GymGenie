import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/warmups" asChild>
        <Pressable>
          <Text>Warm Ups</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
