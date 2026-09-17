import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>app 1 bm</Text>
      <Link href="/about" style={styles.button}>
        Go to About Us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#b80f0f",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#415252",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
