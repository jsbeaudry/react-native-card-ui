import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  ProgressViewIOS,
  ProgressBarAndroid,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import propTypes from "prop-types";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Icon from "react-native-vector-icons/FontAwesome";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

import {
  CardEcomOne,
  CardEcomTwo,
  CardEcomThree,
  CardEcomFour
} from "./CardEC";

import {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
  CardSeven,
  CardEight,
  CardNine,
  CardTen,
  CardEleven,
  CardTwelve
} from "./Cards";

{
  /*
////////////////////////////////////////////////////////////////
//////////////////////////  propTypes Ecommerce Cards  ////////////////////////////
////////////////////////////////////////////////////////////////
  */
}
CardEcomOne.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  nbStar: propTypes.number.isRequired,
  iconColor: propTypes.string.isRequired,
  selectColor: propTypes.string.isRequired,
  getSelectColor: propTypes.func.isRequired,
  colorList: propTypes.arrayOf(propTypes.string.isRequired)
};
CardEcomTwo.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  price: propTypes.string.isRequired
};

CardEcomThree.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired,
  buttonColor: propTypes.string.isRequired,
  onClickButton: propTypes.func
};

CardEcomFour.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired,
  buttonColor: propTypes.string.isRequired,
  onClickButton: propTypes.func
};

export { CardEcomOne, CardEcomTwo, CardEcomThree, CardEcomFour };

{
  /*
////////////////////////////////////////////////////////////////
//////////////////////////  propTypes Ecommerce Cards  ////////////////////////////
////////////////////////////////////////////////////////////////
  */
}

CardOne.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  borderRadius: propTypes.number,
  shadowColor: propTypes.string,
  image: propTypes.oneOfType([propTypes.number, propTypes.object])
};
CardTwo.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  profile: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  icon: propTypes.string,
  iconColor: propTypes.string
};
CardThree.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  profile: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  icon: propTypes.string,
  iconColor: propTypes.string
};
CardFour.propTypes = {
  onClicked: propTypes.func.isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  date: propTypes.string.isRequired,
  off: propTypes.string.isRequired,
  offText: propTypes.string.isRequired,
  buttonText: propTypes.string.isRequired
};
CardFive.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  profile: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  icon: propTypes.string.isRequired,
  nbStar: propTypes.number.isRequired,
  iconColor: propTypes.string.isRequired
};
CardSix.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  profile: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  icon1: propTypes.string.isRequired,
  iconColor1: propTypes.string.isRequired,
  onClicked1: propTypes.func.isRequired,
  iconBackground1: propTypes.string.isRequired,
  icon2: propTypes.string.isRequired,
  iconColor2: propTypes.string.isRequired,
  iconBackground2: propTypes.string.isRequired,
  onClicked2: propTypes.func.isRequired
};
CardSeven.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  icon1: propTypes.string.isRequired,
  iconColor1: propTypes.string.isRequired,
  iconBackground1: propTypes.string.isRequired,
  onClicked1: propTypes.func.isRequired,
  icon2: propTypes.string.isRequired,
  iconColor2: propTypes.string.isRequired,
  iconBackground2: propTypes.string.isRequired,
  onClicked2: propTypes.func.isRequired
};
CardEight.propTypes = {
  image1: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  image2: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  image3: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired
};
CardNine.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  price: propTypes.number.isRequired,
  onClicked: propTypes.func.isRequired
};
CardTen.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  price: propTypes.number.isRequired,
  star: propTypes.number.isRequired,
  starsFor: propTypes.string.isRequired
};
CardEleven.propTypes = {
  price: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  stars: propTypes.number.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
  image1: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  image2: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  backgroundImage: propTypes.oneOfType([propTypes.number, propTypes.object])
    .isRequired,
  onClickedShare: propTypes.func.isRequired,
  onClickedPlus: propTypes.func.isRequired
};
CardTwelve.propTypes = {
  image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
  title: propTypes.string.isRequired,
  subTitle: propTypes.string.isRequired,
  viewProgress: propTypes.bool.isRequired,
  progress: propTypes.number.isRequired
};
export {
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
  CardSeven,
  CardEight,
  CardNine,
  CardTen,
  CardEleven,
  CardTwelve
};
