/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View
} from "react-native";
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
  CardTwelve,
  CardEcomOne,
  CardEcomTwo,
  CardEcomThree,
  CardEcomFour
} from "react-native-card-ui";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CardEcomFour
            title={"Porsche Rubber"}
            subTitle={
              "Zermatt is famed as a mounering and ski destome banmdo liono"
            }
            price={"$200"}
            image={require("./acg.png")}
            buttonText={"VIEW DETAILS"}
            buttonColor={"#4383FF"}
            onClickButton={() => alert("Has clicked")}
          />
          <CardEcomThree
            title={"Porsche Rubber"}
            subTitle={
              "Zermatt is famed as a mounering and ski destome banmdo liono"
            }
            price={"$200"}
            image={require("./sac.png")}
            buttonText={"Buy now"}
            buttonColor={"#ff2788"}
            onClickButton={() => alert("Has clicked")}
          />
          <CardEcomTwo
            title={"Porsche Rubber"}
            subTitle={
              "Zermatt is famed as a mounering and ski destome banmdo liono"
            }
            price={"$200"}
            image={{ uri: "http://......" }} // OR {require("./montre.png")}
          />
          <CardEcomOne
            title={"NIKE SILVER"}
            price={"$200"}
            image={{ uri: "http://......" }} //OR {require("./nikesilver.png")}
            icon={"star"}
            nbStar={3}
            iconColor={"#FFC57C"}
            colorList={["#000000", "#0b8457", "#7ed3b2"]}
            selectColor={"#000000"}
            getSelectColor={color => alert(color)}
          />

          <CardOne
            height={100}
            width={100}
            borderRadius={20}
            shadowColor={"blue"}
            image={require("./placeholderImage.jpg")}
          />
          <CardTwo
            title={"John Bob will"}
            subTitle={"Devlopper"}
            profile={{
              uri:
                "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
            }}
            image={{
              uri:
                "https://www.gettyimages.com/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg"
            }}
            icon={"apple"}
            iconColor={"red"}
          />
          <CardThree
            title={"John Bob"}
            subTitle={"Devlopper"}
            profile={{
              uri:
                "http://www.annonce-musicien.fr/assets/user_xl-e4e8b0bbfd2332dce41ff66644dd16f2.png"
            }}
            icon={"forward"}
            iconColor={"grey"}
          />

          <CardFour
            onClicked={() => {
              alert("Buy now");
            }}
            image={{
              uri:
                "https://www.gettyimages.com/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg"
            }}
            date={"24 December 2018"}
            off={"-25%"}
            offText={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            buttonText={"BUY NOW!"}
          />

          <CardFive
            title={"Vinny’s Barber"}
            subTitle={"852 N Virgil Ave, Beverly Hills"}
            profile={{
              uri:
                "https://www.gettyimages.com/gi-resources/images/frontdoor/creative/PanoramicImagesRM/FD_image.jpg"
            }}
            image={{
              uri:
                "https://www.chambre237.com/wp-content/uploads/2017/09/Un-Photographe-professionnel-partage-ses-Secrets-pour-capturer-des-Photos-de-Paysage-parfaites-03.jpg"
            }}
            icon={"star"}
            nbStar={3}
            iconColor={"#FFC57C"}
          />

          <CardSix
            title={"Vinny’s Barber"}
            subTitle={"852 N Virgil Ave, Beverly Hills"}
            profile={{
              uri:
                "https://lemag.nikonclub.fr/wp-content/uploads/2016/11/Photo-selection-pour-Nikon-France-Mattia-Bonavida-2016-6.jpg"
            }}
            image={{
              uri:
                "https://idinterdesign.ca/wp-content/uploads/2016/07/paysage-ID-02-750x468.jpg"
            }}
            icon1={"star"}
            iconColor1={"#fff"}
            iconBackground1={"red"}
            onClicked1={() => {
              alert("Hello!");
            }}
            icon2={"rocket"}
            iconColor2={"#fff"}
            iconBackground2={"purple"}
            onClicked2={() => {
              alert("Hello!");
            }}
          />

          <CardSeven
            title={"Vinny’s Barber"}
            subTitle={"852 N Virgil Ave, Beverly Hills"}
            image={{
              uri:
                "http://www.bretagne-paysage.fr/sites/bretagn2016/files/styles/large/public/diaporama/paysagiste-plerin_5.jpg?itok=9Qyy75zj"
            }}
            icon1={"share"}
            iconColor1={"#fff"}
            iconBackground1={"purple"}
            onClicked1={() => {
              alert("Hello!");
            }}
            icon2={"heart"}
            iconColor2={"#fff"}
            iconBackground2={"red"}
            onClicked2={() => {
              alert("Hello!");
            }}
          />
          <CardEight
            image1={{
              uri:
                "https://i.pinimg.com/originals/c5/2f/c9/c52fc99b6fecac8e6bc20a8ccc83a7e1.jpg"
            }}
            image2={{
              uri:
                "https://i.skyrock.net/8763/90148763/pics/3210114483_1_8_NbfxWMCA.jpg"
            }}
            image3={{
              uri: "https://img.ev.mu/images/articles/960x/450056.jpg"
            }}
          />

          <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />

          <View style={{ marginBottom: 80 }} />
          <CardTen
            title={"Sweety Cake"}
            subTitle={"70, Nevsky Avenue"}
            image={{
              uri:
                "http://www.piochenevada.org/wp-content/uploads/2018/07/Modern-house.jpg"
            }}
            price={33.5}
            star={3}
            starsFor={"240 reviews"}
          />

          <CardEleven
            price={"$900/month"}
            title={"Louvre apartment"}
            subTitle={"Double family house"}
            stars={4}
            tags={["wifi", "Air cond.", "TV", "Kitchen"]}
            image1={{
              uri:
                "https://i.pinimg.com/originals/c4/9b/f9/c49bf95e4e02873610daf3bfda54e44a.jpg"
            }}
            image2={{
              uri:
                "https://i.pinimg.com/originals/c4/9b/f9/c49bf95e4e02873610daf3bfda54e44a.jpg"
            }}
            backgroundImage={{
              uri:
                "https://i.pinimg.com/originals/c4/9b/f9/c49bf95e4e02873610daf3bfda54e44a.jpg"
            }}
            onClickedShare={() => alert("Hello")}
            onClickedPlus={() => alert("Hello")}
          />

          <CardTwelve
            image={{
              uri:
                "https://i.pinimg.com/originals/c4/9b/f9/c49bf95e4e02873610daf3bfda54e44a.jpg"
            }}
            title={"Card name"}
            subTitle={"John Bob"}
            viewProgress={true}
            progress={2}
          />
        </ScrollView>
        {/*this.state.people.map((item, i) => <Text key={i}>{item.name} </Text>)*/}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
