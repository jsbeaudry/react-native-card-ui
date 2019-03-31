import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";


import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Icon from "react-native-vector-icons/FontAwesome";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


export class CardEcomOne extends Component<Props> {
  static defaultProps={
    title:"",
    price:"0.0",
    icon:"star",
    nbStar:0,
    iconColor:"#000000",
    selectColor:"#000000",
    colorList:[],
    image:require("./placeholderImage.jpg"),
  }
  constructor(props) {
    super(props);
    this.state = {color:this.props.selectColor}
  }
  colorSelect = (color)=>{this.props.getSelectColor(color);this.setState({color:color})}
  render() {
    const {
      title,
      price,
      image,
      icon,
      nbStar,
      iconColor,
      selectColor,
      colorList
    } = this.props;
    const {color} = this.state;
    return (
      <View
        style={{
          backgroundColor: "transparent",
          alignSelf: "center",
          margin: 10,
          flexDirection: "column",
          width: screenWidth - 20,
          borderWidth: 0,
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View
          style={{
            borderTopLeftRadius: scale(12),
            borderTopRightRadius: scale(12),
            backgroundColor: "transparent",
            height: verticalScale(200)
          }}
        >
          <Image
            borderRadius={12}
            source={image}
            style={{
              width: screenWidth - 20,
              height: verticalScale(195),
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: verticalScale(95),
            marginTop: scale(-12),
            borderBottomLeftRadius: scale(12),
            borderBottomRightRadius: scale(12)
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1
            }}
          >

            <View
              style={{
                backgroundColor: "transparent",
                flex: 3,
                justifyContent: "center"
              }}
            >
              <Text
                style={{ color: "#000", fontSize: scale(16), marginLeft: scale(12) }}
              >
                {title}
              </Text>
              <View
                style={{
                  flexDirection:"row",
                  marginLeft: scale(12),
                  marginTop:scale(5)
                }}
              >

              {colorList.map((item, index)=>{return (
                <TouchableOpacity
                onPress={()=>this.colorSelect(item)}
                  key={index}
                  style={{
                    backgroundColor: "#fff",
                    height:20,
                    width:20,
                    marginRight:5,
                    borderRadius: scale(50),
                    borderWidth:color==item?6:10,
                    borderColor:item,
                    justifyContent: "center",
                    alignItems: "flex-start"
                  }}
                />
              )})}




              </View>
              <Text
                style={{ color: "#000", fontWeight:"bold", fontSize: scale(16), margin: scale(12) }}
              >
                {price}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                flex: 1,
                position:"absolute",
                bottom:25,
                right:10,
                flexDirection:"row",
                borderBottomRightRadius: scale(12),
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Icon
                key={index}
                name={icon}
                style={{ margin: 2 }}
                color={nbStar >= index + 1 ? "#2f89fc" : "#bbb"}
                size={scale(15)}
              />
            ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}


export class CardEcomTwo extends Component<Props> {
  static defaultProps={
    title:"",
    price:"0.0",
    subTitle:"",
    image:require("./placeholderImage.jpg"),
  }

  constructor(props) {
    super(props);
    this.state = {color:"#900c3f"}
  }
  render() {
    const {
      title,
      subTitle,
      price,
      image,
    } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#fff",
          alignSelf: "center",
          margin: 10,
          flexDirection: "column",
          width: screenWidth - 20,
          borderWidth: 0,
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          flex: 3,
          height:150,
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <Text
          style={{ color: "#000", fontSize: scale(16), marginLeft: scale(12) }}
        >
          {title}
        </Text>

        <Text
          style={{ color: "#777", fontSize: scale(12), margin: scale(12), textAlign:"center" }}
        >
          {subTitle}
        </Text>
        <Text
          style={{ color: "#000", fontSize: scale(15), fontWeight:"bold", margin: scale(12) }}
        >
          {price}
        </Text>



        </View>


          <Image
            borderRadius={12}
            source={image}
            style={{
              width: screenWidth - 23,
              height: verticalScale(195),
              resizeMode: "contain",
              marginTop:0
            }}/>


      </View>
    );
  }
}


export class CardEcomThree extends Component<Props> {
  static defaultProps={
    title:"",
    price:"0.0",
    subTitle:"",
    buttonText:"Button text",
    image:require("./placeholderImage.jpg"),
  }
  constructor(props) {
    super(props);
    this.state = {color:"#900c3f"}
  }
  render() {
    const {
      title,
      subTitle,
      price,
      image,
      buttonText,
      buttonColor
    } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#fff",
          alignSelf: "center",
          margin: 10,
          flexDirection: "column",
          width: screenWidth - 20,
          borderWidth: 0,
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          flex: 3,
          height:150,
          justifyContent: "center",
          alignItems:"flex-start"
        }}
      >
        <Text
          style={{ color: "#000", fontSize: scale(16), marginLeft: scale(12) }}
        >
          {title}
        </Text>

        <Text
          style={{ color: "#777", fontSize: scale(9), margin: scale(12), textAlign:"left", width:screenWidth-200 }}
        >
          {subTitle}
        </Text>
        <Text
          style={{ color: "#000", fontSize: scale(15), fontWeight:"bold", margin: scale(12) }}
        >
          {price}
        </Text>



        </View>


          <Image
            borderRadius={12}
            source={image}
            style={{
              width: screenWidth - 23,
              height: verticalScale(150),
              resizeMode: "cover",
            }}/>
            {this.props.onClickButton?
            <TouchableOpacity
              onPress={() => this.props.onClickButton()}
              style={[
                {
                  justifyContent: "center",
                  position:"absolute",
                  bottom:0, left:20,
                  borderWidth: 0,
                  borderColor: "#eee",
                  alignItems: "center",
                  alignSelf: "flex-end",
                  paddingLeft:20,
                  paddingRight:20,
                  height: scale(40),
                  margin: 30,
                  shadowRadius: 5,
                  borderRadius: scale(0),
                  backgroundColor:  buttonColor
                }
              ]}
            >
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 12,
                  fontWeight: "900"
                }}
              >
                {buttonText}
              </Text>
            </TouchableOpacity>
            :null}

      </View>
    );
  }
}


export class CardEcomFour extends Component<Props> {
  static defaultProps={
    title:"",
    price:"0.0",
    subTitle:"",
    buttonText:"Button text",
    image:require("./placeholderImage.jpg"),
  }
  constructor(props) {
    super(props);
    this.state = {color:"#900c3f"}
  }
  render() {
    const {
      title,
      subTitle,
      price,
      image,
      buttonText,
      buttonColor
    } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#fff",
          alignSelf: "center",
          margin: 10,
          flexDirection: "column",
          width: screenWidth - 20,
          borderWidth: 0,
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >

      <ImageBackground
      borderRadius={12}
      source={image}
        style={{

        }}
      >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 12,
          flex: 3,
          height:350,
          resizeMode:"contain",
          justifyContent: "center",
          alignItems:"center"
        }}>
        <Text
          style={{ color: "#ffffff", fontSize: scale(16), marginLeft: scale(12), marginTop: scale(40) }}
        >
          {title}
        </Text>

        <Text
          style={{ color: "#ffffff", fontSize: scale(9), margin: scale(12), textAlign:"center", width:screenWidth-200 }}
        >
          {subTitle}
        </Text>
        <Text
          style={{ color: "#ffffff", fontSize: scale(15), fontWeight:"bold", margin: scale(12) }}
        >
          {price}
        </Text>


        {this.props.onClickButton?
        <TouchableOpacity
          onPress={() => this.props.onClickButton()}
          style={[
            {
              justifyContent: "center",
              borderWidth: 0,
              borderColor: "#eee",
              alignItems: "center",
              paddingLeft:20,
              paddingRight:20,
              height: scale(40),
              marginTop: 70,
              shadowRadius: 5,
              borderRadius: scale(0),
              backgroundColor:  buttonColor
            }
          ]}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 12,
              fontWeight: "900"
            }}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
        :null}

              </View>
        </ImageBackground>





      </View>
    );
  }
}
