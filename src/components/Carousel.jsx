import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.carousel}>
      <Swiper style={styles.wraper} showsPagination={false} autoplay={true}>
        {CarouselData.map((item) => (
          <View key={item.id}>
            <Image source={item.image} style={styles.carouselImg} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carousel: {},
  wraper: {
    height: 300,
  },
  carouselImg: {
    width: "100%",
    height: 250,
    objectFit: "contain",
  },
});
