import { Image, StyleSheet, Text, View } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outherContainer}>
      <Text style={styles.recentSeacrh}>{item.title}</Text>
      <Image style={styles.serviceImg} source={item.image} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  outherContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentSeacrh: {
    color: "#2c4341",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
});
