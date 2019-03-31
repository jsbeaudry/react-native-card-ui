# react-native-card-ui

react-native-card-ui is a ui library that help developer to create beautiful react native ios and android application by coding less .

# Dependences

react-native-card-ui uses some others libraries like:

* [react-native-size-matters] - for scale the ui screen
* [react-native-vector-icons] - for icons


And of course react-native-card-ui itself is open source with a [public repository][crcui]
 on GitHub.

### Installation
Install the dependencies need to work well.

### Let's install  react-native-vector-icons
```sh
$ cd approot
$ npm install react-native-vector-icons
$ react-native link react-native-vector-icons
```
### Let's install  react-native-size-matters
```sh
$ cd approot
$ npm install --save react-native-size-matters
```
### Now let's install  react-native-card-ui


```sh
$ npm install --save react-native-card-ui

```

###  CardEcomOne
![alt text][cardEcom4]
```sh
        <CardEcomOne
            title={"NIKE SILVER"}
            price={"$200"}
            image={require("./nikesilver.png")} //OR {{uri:"http://......"}}
            icon={"star"}
            nbStar={3}
            iconColor={"#FFC57C"}
            colorList={["#000000", "#0b8457", "#7ed3b2"]}
            selectColor={"#000000"}
            getSelectColor={color => alert(color)}
          />

```

###  CardEcomTwo
![alt text][cardEcom3]
```sh
        <CardEcomTwo
            title={"Porsche Rubber"}
            subTitle={ "Zermatt is famed as a mounering and ski destome banmdo liono"}
            price={"$200"}
            image= {require("./montre.png")} // OR {{uri:"http://......"}} 
          />

```

###  CardEcomThree
![alt text][cardEcom2]
```sh
        <CardEcomThree
            title={"Porsche Rubber"}
            subTitle={"Zermatt is famed as a mounering and ski destome banmdo liono"}
            price={"$200"}
            image={require("./sac.png")} // OR {{uri:"http://......"}} 
            buttonText={"Buy now"}
            buttonColor={"#ff2788"}
            onClickButton={() => alert("Has clicked")}
          />

```

###  CardEcomFour
![alt text][cardEcom1]
```sh
        <CardEcomFour
            title={"Porsche Rubber"}
            subTitle={"Zermatt is famed as a mounering and ski destome banmdo liono"}
            price={"$200"}
            image={require("./acg.png")}
            buttonText={"VIEW DETAILS"}
            buttonColor={"#4383FF"}
            onClickButton={() => alert("Has clicked")}
          />

```

###  CardOne
![alt text][card1]
```sh
        <CardOne
            height={100}
            width={100}
            borderRadius={20}
            shadowColor={"blue"}
            image={require("./placeholderImage.jpg")} // OR {{uri:"http://......"}} 
          />

```

###  CardTwo
![alt text][card2]
```sh
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

```
###  CardThree
![alt text][card3]
```sh
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

```
###  CardFour
![alt text][card4]
```sh
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

```
###  CardFive
![alt text][card5]
```sh
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

```
###  CardSix
![alt text][card6]
```sh
        
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

```
###  CardSeven
![alt text][card7]
```sh
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

```
###  CardEight
![alt text][card8]
```sh
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

```
###  CardNine
![alt text][card9]
```sh
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

```
###  CardTen
![alt text][card10]
```sh
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

```
###  CardEleven
![alt text][card11]
```sh
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

```
###  CardTwelve
![alt text][card12]
```sh
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

```
   
   [react-native-size-matters]: <https://www.npmjs.com/package/react-native-size-matters>
   [react-native-vector-icons]: <https://github.com/oblador/react-native-vector-icons>
   [crcui]: https://github.com/jsbeaudry/react-native-card-ui
  [logo]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_1.png
  
  [cardEcom1]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_ecom_1.png
  [cardEcom2]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_ecom_2.png
  [cardEcom3]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_ecom_3.png
  [cardEcom4]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_ecom_4.png
  
  [card1]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_1.png
  [card2]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_2.png
  [card3]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_3.png
  [card4]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_4.png
  [card5]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_5.png
  [card6]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_6.png
  [card7]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_7.png
  [card8]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_8.png
  [card9]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_9.png
  [card10]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_10.png
  [card11]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_11.png
  [card12]: https://res.cloudinary.com/parkour/image/upload/v1554050051/cardUI/card_12.png
 

