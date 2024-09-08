import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Appbar, Button } from "react-native-paper";

export default function Home() {
  return (
    <View style={styles.fullScreen}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.container}>
        <Link href="/warmups" asChild>
          <Button style={styles.button} icon="" mode="contained">
            Warm Ups
          </Button>
        </Link>

        <Link href="/weeks" asChild>
          <Button style={styles.button} icon="" mode="contained">
            Weeks
          </Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 250,
    margin: 15,
  },
});
