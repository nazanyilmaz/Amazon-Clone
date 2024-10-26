import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Category } from "../data/Category";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.category}
          onPress={() => navigation.navigate("Product")}
        >
          <Image source={item.image} style={styles.imgStyle} alt="image" />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  imgStyle: {
    width: 60,
    height: 60,
  },
  title: {
    color: "#2c4341",
  },
});
