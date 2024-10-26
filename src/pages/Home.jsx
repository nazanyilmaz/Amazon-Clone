import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Carousel />
        <Service />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
