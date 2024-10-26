import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <AntDesign name="search1" size={20} color={"#848484"} />
            <TextInput placeholder="Search Amazon" style={styles.textInput} />
          </View>
          <AntDesign name="scan1" size={20} color={"#848484"} />
        </View>
        <Feather name="mic" size={22} color={"#000000"} />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderColor: "#a1bcc0",
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 8,
  },
});
