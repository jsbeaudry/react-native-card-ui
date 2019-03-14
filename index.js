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

import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Icon from "react-native-vector-icons/FontAwesome";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export class CardOne extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    let { width, height, image, borderRadius, shadowColor } = this.props;
    return (
      <View
        style={{
          borderRadius: 10,
          marginLeft: 10,
          width: scale(width),
          height: height,
          shadowColor: shadowColor || "#000",
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <Image
          borderRadius={borderRadius || 0}
          source={image || require("./placeholderImage.jpg")}
          style={{
            width: width || 100,
            height: height || 100,
            resizeMode: "cover"
          }}
        />
      </View>
    );
  }
}

export class CardTwo extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
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
            source={this.props.image}
            style={{
              width: screenWidth - 20,
              height: verticalScale(200),
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: verticalScale(75),
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
                flex: 1,
                borderBottomLeftRadius: scale(12),
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={this.props.profile}
                style={{
                  width: scale(50),
                  height: scale(50)
                }}
                borderRadius={25}
              />
            </View>
            <View
              style={{
                backgroundColor: "transparent",
                flex: 3,
                justifyContent: "center"
              }}
            >
              <Text
                style={{ color: "#000", fontSize: scale(13), margin: scale(3) }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{ color: "#000", fontSize: scale(11), margin: scale(3) }}
              >
                {this.props.subTitle}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                flex: 1,
                borderBottomRightRadius: scale(12),
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {this.props.icon ? (
                <Icon
                  name={this.props.icon}
                  color={this.props.iconColor}
                  size={scale(20)}
                />
              ) : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardThree extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.background
            ? this.props.background
            : "#fff",
          margin: scale(10),
          alignSelf: "center",
          borderRadius: 12,
          elevation: 2,
          flexDirection: "column",
          width: screenWidth - scale(20),
          shadowColor: "#000",
          shadowOpacity: 0.16,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View
          style={{
            height: verticalScale(75),
            marginRight: scale(20)
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1
            }}
          >
            {this.props.profile ? (
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 1,
                  borderBottomLeftRadius: 12,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={this.props.profile}
                  style={{
                    width: scale(this.props.width || 40),
                    height: scale(this.props.height || 40)
                  }}
                  borderRadius={5}
                />
              </View>
            ) : null}
            <View
              style={{
                backgroundColor: "transparent",
                flex: this.props.profile ? 3 : 5,
                justifyContent: "center",
                marginLeft: 3
              }}
            >
              <Text
                style={{
                  color: this.props.background ? "#fff" : "#535bfe",
                  fontSize: scale(13),
                  margin: 3
                }}
              >
                {this.props.title}
              </Text>
              {this.props.background ? null : (
                <Text
                  style={{ color: "#adb3bf", fontSize: scale(11), margin: 3 }}
                >
                  {this.props.subTitle}
                </Text>
              )}
            </View>
            <View
              style={{
                flex: 1,
                borderBottomRightRadius: 12,
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              {this.props.icon ? (
                <Icon
                  name={this.props.icon}
                  color={this.props.iconColor}
                  size={scale(20)}
                />
              ) : null}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardFour extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        source={this.props.image}
        borderRadius={12}
        style={{
          margin: scale(10),
          alignSelf: "center",
          flexDirection: "column",
          width: screenWidth - scale(20),
          height: verticalScale(300),
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: 12,
            flex: 1
          }}
        >
          <Text style={{ flex: 1, color: "#fff", fontSize: 17, margin: 20 }}>
            {this.props.date}
          </Text>
          <View
            style={{
              flex: 4,
              marginLeft: scale(20),
              backgroundColor: "transparent",
              alignItems: "flex-start"
            }}
          >
            <Text
              style={{
                marginTop: scale(15),
                color: "#fff",
                fontSize: scale(30),
                marginBottom: scale(20)
              }}
            >
              {this.props.off}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: scale(11),
                width: scale(200),
                textAlign: "justify"
              }}
            >
              {this.props.offText.substring(0, 100) + "."}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.onClicked()}
            style={[
              {
                justifyContent: "center",
                zIndex: 3,
                alignItems: "center",
                alignSelf: "flex-end",
                width: 150,
                height: 40,
                margin: 20,
                shadowRadius: 5,
                borderRadius: 40,
                backgroundColor: "#774898"
              }
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ color: "#ffffff", fontSize: 13, fontWeight: "bold" }}
              >
                {"BUY NOW"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export class CardFive extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          alignSelf: "center",
          margin: scale(10),
          flexDirection: "column",
          width: screenWidth - scale(20),
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "transparent",
            height: verticalScale(200)
          }}
        >
          <Image
            borderRadius={12}
            source={this.props.image}
            style={{
              width: screenWidth - scale(20),
              height: verticalScale(200),
              resizeMode: "cover"
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: scale(15),
            marginTop: scale(-12),
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12
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
                style={{ color: "#000", margin: scale(3), fontSize: scale(20) }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{ color: "#888", margin: scale(3), fontSize: scale(15) }}
              >
                {this.props.subTitle}
              </Text>

              <View
                style={{
                  backgroundColor: "#fff",
                  flex: 1,
                  borderBottomRightRadius: 12,
                  flexDirection: "row"
                }}
              >
                {this.props.icon ? (
                  <Icon
                    name={this.props.icon}
                    color={
                      this.props.nbStar >= 1 ? this.props.iconColor : "#999"
                    }
                    size={scale(17)}
                    style={{ margin: scale(2) }}
                  />
                ) : null}
                {this.props.icon ? (
                  <Icon
                    name={this.props.icon}
                    color={
                      this.props.nbStar >= 2 ? this.props.iconColor : "#999"
                    }
                    size={scale(17)}
                    style={{ margin: scale(2) }}
                  />
                ) : null}
                {this.props.icon ? (
                  <Icon
                    name={this.props.icon}
                    color={
                      this.props.nbStar >= scale(3)
                        ? this.props.iconColor
                        : "#999"
                    }
                    size={scale(17)}
                    style={{ margin: scale(2) }}
                  />
                ) : null}
                {this.props.icon ? (
                  <Icon
                    name={this.props.icon}
                    color={
                      this.props.nbStar >= scale(4)
                        ? this.props.iconColor
                        : "#999"
                    }
                    size={scale(17)}
                    style={{ margin: scale(2) }}
                  />
                ) : null}
                {this.props.icon ? (
                  <Icon
                    name={this.props.icon}
                    color={
                      this.props.nbStar >= scale(5)
                        ? this.props.iconColor
                        : "#999"
                    }
                    size={scale(17)}
                    style={{ margin: scale(2) }}
                  />
                ) : null}
                <Text
                  style={{
                    color: "#666",
                    margin: scale(2),
                    fontSize: scale(15),
                    alignSelf: "center"
                  }}
                >
                  ({this.props.nbStar +
                    " star" +
                    (this.props.nbStar > scale(1) ? "s" : "")})
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardSix extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          height: verticalScale(440),
          margin: scale(10),
          flexDirection: "column",
          width: screenWidth - scale(20),
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#777",
          shadowOpacity: 0.16,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          }
        }}
      >
        <View
          style={{
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            backgroundColor: "transparent",
            height: verticalScale(300)
          }}
        >
          <Image
            borderRadius={12}
            source={this.props.image}
            style={{
              width: screenWidth - scale(20),
              height: verticalScale(300),
              resizeMode: "cover"
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            height: verticalScale(150),
            padding: scale(5),
            marginTop: scale(-12),
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12
          }}
        >
          <View
            style={{
              flexDirection: "row",
              zIndex: 4,
              flex: 1,
              marginTop: -scale(135),
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.onClicked1()}
              style={[
                {
                  justifyContent: "center",
                  zIndex: 3,
                  alignItems: "center",
                  alignSelf: "flex-end",
                  width: scale(50),
                  height: scale(50),
                  margin: 10,
                  shadowRadius: 5,
                  borderRadius: scale(40),
                  backgroundColor: this.props.iconBackground1
                }
              ]}
            >
              <Icon
                name={this.props.icon1}
                color={this.props.iconColor1}
                size={scale(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.onClicked2()}
              style={[
                {
                  justifyContent: "center",
                  zIndex: 3,
                  alignItems: "center",
                  alignSelf: "flex-end",
                  width: scale(50),
                  height: scale(50),
                  margin: 10,
                  shadowRadius: 5,
                  borderRadius: scale(40),
                  backgroundColor: this.props.iconBackground2
                }
              ]}
            >
              <Icon
                name={this.props.icon2}
                color={this.props.iconColor2}
                size={scale(20)}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: verticalScale(-30),
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
                style={{ color: "#000", margin: scale(3), fontSize: scale(17) }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  color: "#888",
                  textAlign: "justify",
                  margin: scale(3),
                  fontSize: scale(12)
                }}
              >
                {
                  "The essence of minimalism is to eliminate the excess vanity to reveal the original characteristics of the home, from a simple…"
                }
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardSeven extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          margin: scale(10),
          flexDirection: "row",
          width: screenWidth - scale(20),
          shadowColor: "#777",
          borderRadius: 12,
          elevation: 2,
          shadowOpacity: 0.16,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          },
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            height: verticalScale(130),
            justifyContent: "center",
            alignItems: "center",
            width: scale(130),
            flex: 2
          }}
        >
          <Image
            source={this.props.image}
            style={{
              height: verticalScale(120),
              width: scale(120),
              resizeMode: "cover"
            }}
          />
        </View>

        <View
          style={{
            flex: 3,
            height: scale(150),
            padding: scale(5),
            marginTop: 0
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
                style={{ color: "#000", margin: scale(3), fontSize: scale(17) }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  color: "#888",
                  textAlign: "justify",
                  margin: scale(3),
                  fontSize: scale(12)
                }}
              >
                {
                  "The essence of minimalism is to eliminate the excess vanity to reveal the original characteristics of the home, from a simple…"
                }
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  zIndex: scale(4),
                  flex: 1,
                  marginTop: -0,
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.onClicked1()}
                  style={[
                    {
                      justifyContent: "center",
                      zIndex: 3,
                      alignItems: "center",
                      alignSelf: "flex-end",
                      width: scale(30),
                      height: scale(30),
                      margin: 10,
                      shadowRadius: 5,
                      borderRadius: scale(15),
                      backgroundColor: this.props.iconBackground1
                    }
                  ]}
                >
                  <Icon
                    name={this.props.icon1}
                    color={this.props.iconColor1}
                    size={scale(15)}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.onClicked2()}
                  style={[
                    {
                      justifyContent: "center",
                      zIndex: 3,
                      alignItems: "center",
                      alignSelf: "flex-end",
                      width: scale(30),
                      height: scale(30),
                      margin: 10,
                      shadowRadius: 5,
                      borderRadius: scale(15),
                      backgroundColor: this.props.iconBackground2
                    }
                  ]}
                >
                  <Icon
                    name={this.props.icon2}
                    color={this.props.iconColor2}
                    size={scale(15)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardEight extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: scale(10)
        }}
      >
        <Image
          borderRadius={10}
          source={this.props.image3}
          style={{
            flex: 3,
            marginRight: 2,
            height: verticalScale(150),
            resizeMode: "cover"
          }}
        />
        <View
          style={{
            flex: 2,
            height: verticalScale(150)
          }}
        >
          <View
            style={{
              flex: 1,
              marginBottom: 1
            }}
          >
            <ImageBackground
              borderRadius={10}
              source={this.props.image2}
              style={{
                flex: 1,
                resizeMode: "cover"
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0,0,0,0.0)"
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 1
            }}
          >
            <ImageBackground
              borderRadius={10}
              source={this.props.image1}
              style={{
                flex: 1,
                resizeMode: "cover"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderRadius: 10,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name={"plus"} color={"#ffffff"} size={scale(30)} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

export class CardNine extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      image: {
        uri:
          "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg"
      }
    };
  }
  render() {
    return (
      <View
        style={{
          margin: scale(10),
          alignSelf: "flex-end",
          width: screenWidth - 100,
          height: verticalScale(186),
          borderRadius: 12,
          elevation: 2,
          shadowColor: "#000",
          shadowOpacity: 0.16,
          shadowRadius: 4,
          shadowOffset: {
            height: 1,
            width: 0
          },
          borderRadius: 6,
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={this.props.image}
            borderRadius={10}
            style={{
              width: scale(150),
              height: verticalScale(150),
              marginLeft: scale(-75)
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              padding: scale(10)
            }}
          >
            <Text
              style={{
                height: verticalScale(20),
                color: "#404852",
                marginTop: scale(25),
                fontSize: scale(15),
                fontWeight: "700",
                letterSpacing: -0.36,
                lineHeight: scale(20)
              }}
            >
              {this.props.title}
            </Text>
            <Text
              style={{
                width: scale(150),
                color: "#adb3bf",
                textAlign: "justify",
                fontSize: 12,
                fontWeight: "400",
                letterSpacing: -0.29,
                lineHeight: scale(16),
                marginTop: scale(10),
                marginBottom: scale(10)
              }}
            >
              {this.props.subTitle}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: scale(10)
              }}
            >
              <Text
                style={{
                  height: scale(22),
                  color: "#535bfe",
                  fontSize: 12,
                  fontWeight: "900",
                  letterSpacing: -0.29,
                  lineHeight: scale(22)
                }}
              >
                ${this.props.price}
              </Text>
              <TouchableOpacity
                onPress={() => this.props.onClicked()}
                style={[
                  {
                    justifyContent: "center",
                    zIndex: 3,
                    borderWidth: 1,
                    borderColor: "#eee",
                    alignItems: "center",
                    alignSelf: "flex-end",
                    width: scale(80),
                    height: scale(30),
                    margin: 30,
                    shadowRadius: 5,
                    borderRadius: scale(40),
                    backgroundColor: this.props.iconBackground2
                  }
                ]}
              >
                <Text
                  style={{
                    color: "#535bfe",
                    fontSize: 12,
                    fontWeight: "900"
                  }}
                >
                  Buy now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardTen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            zIndex: 3,
            alignSelf: "center",
            width: this.props.width ? screenWidth / 2 - scale(10) : scale(250),
            height: verticalScale(150),
            margin: scale(5),
            borderRadius: 12,
            elevation: 2,
            shadowColor: "#888",
            shadowOpacity: 0.16,
            shadowRadius: 10,
            shadowOffset: {
              height: 1,
              width: 0
            },

            borderRadius: 6,
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Image
              source={this.props.image}
              borderRadius={10}
              style={{
                width: this.props.width
                  ? scale(this.props.width - 20)
                  : scale(204),
                height: this.props.width
                  ? verticalScale(100)
                  : verticalScale(100),
                marginTop: this.props.width
                  ? verticalScale(11)
                  : verticalScale(0),
                alignSelf: "center"
              }}
            />
            <View
              style={{
                width: this.props.width
                  ? scale(this.props.width - 0)
                  : scale(204),
                justifyContent: "center",
                alignItems: "flex-start",
                padding: scale(10),
                marginBottom: scale(20)
              }}
            >
              <Text
                style={{
                  color: "#404852",
                  fontSize: verticalScale(15),
                  fontWeight: "700",
                  letterSpacing: -0.36
                }}
              >
                {this.props.title}
              </Text>
              <Text
                style={{
                  color: "#adb3bf",
                  fontSize: scale(12),
                  fontWeight: "400",
                  letterSpacing: -0.29,
                  lineHeight: scale(16)
                }}
              >
                {this.props.subTitle}
              </Text>
              {this.props.width ? (
                <Text
                  style={{
                    color: "#535bfe",
                    fontSize: scale(12),
                    fontWeight: "500",
                    letterSpacing: -0.29,
                    lineHeight: scale(22),
                    textAlign: "center"
                  }}
                >
                  {"75  m"}
                </Text>
              ) : null}
              <View style={{ flexDirection: "row", marginBottom: 40 }}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <Icon
                    key={index}
                    name={"star"}
                    style={{ margin: 2 }}
                    color={this.props.star >= index + 1 ? "#ffd553" : "#bbb"}
                    size={scale(15)}
                  />
                ))}
                <Text
                  style={{
                    color: "#adb3bf",
                    fontSize: scale(10),
                    fontWeight: "400",
                    letterSpacing: -0.24,
                    lineHeight: scale(22)
                  }}
                >
                  {this.props.star}
                  {"(463)"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export class CardEleven extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { star: 3 };
  }

  render() {
    return (
      <View
        style={{
          height: verticalScale(250),
          margin: scale(10),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <View
          style={{
            height: verticalScale(200),
            marginRight: scale(-20),
            borderRadius: 12,
            zIndex: 3,
            shadowColor: "#555",
            shadowOpacity: 0.4,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 0
            },
            width: screenWidth - scale(200),
            backgroundColor: "#fff"
          }}
        >
          <Text
            style={{
              fontSize: scale(17),
              marginLeft: scale(10),
              marginTop: scale(20),
              fontWeight: "bold",
              color: "#000"
            }}
          >
            {this.props.price}
          </Text>
          <Text
            style={{
              fontSize: scale(12),
              marginLeft: scale(10),
              marginTop: scale(5),
              color: "#888"
            }}
          >
            {this.props.subTitle}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: scale(10),
              marginTop: scale(15),
              marginLeft: scale(10)
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Icon
                key={index}
                name={"star"}
                style={{ margin: 2 }}
                color={this.props.stars >= index + 1 ? "#ffd553" : "#bbb"}
                size={13}
              />
            ))}
            <Text
              style={{
                color: "#adb3bf",
                fontSize: 12,
                fontWeight: "400",
                letterSpacing: -0.24,
                lineHeight: 18
              }}
            >
              {" " + this.props.stars}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: scale(10)
            }}
          >
            <Image
              source={this.props.image1}
              style={{
                height: scale(36),
                width: scale(36),
                marginLeft: 5
              }}
              borderRadius={18}
            />
            <Image
              source={this.props.image1}
              style={{
                height: scale(36),
                width: scale(36),
                marginLeft: 5
              }}
              borderRadius={18}
            />
            <TouchableOpacity
              onPress={() => this.props.onClickedPlus()}
              style={{
                height: verticalScale(36),
                width: verticalScale(36),
                marginLeft: 5,
                borderRadius: 18,
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon name={"plus"} color={"#000"} size={20} style={{}} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{
              flexDirection: "row",

              marginTop: 10,
              marginLeft: 10
            }}
          >
            {this.props.tags.map((item, index) => (
              <View
                key={index}
                style={{
                  width: scale(50),
                  height: verticalScale(15),
                  margin: 2,
                  backgroundColor: "#408ab4",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: "#fff", fontSize: 9 }}>Wifi</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <ImageBackground
          source={this.props.backgroundImage}
          style={{
            height: verticalScale(250),
            zIndex: 2,
            width: screenWidth - scale(170),
            shadowColor: "#555",
            shadowOpacity: 0.4,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 0
            }
          }}
          borderRadius={12}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,.4)",
              borderRadius: 12
            }}
          >
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                bottom: 7,

                right: 3
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  marginLeft: 40,
                  flex: 3,
                  fontWeight: "900",
                  color: "#fff",
                  textAlign: "left"
                }}
              >
                Lovren Apartment
              </Text>
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 7,
                  backgroundColor: "#4e413b",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon
                  onPress={() => this.props.onClickedShare()}
                  name={"share"}
                  color={"#fff"}
                  size={20}
                  style={{}}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            height: verticalScale(200),
            width: scale(40),
            marginLeft: scale(-30),
            borderRadius: 20,
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        />
      </View>
    );
  }
}

export class Card12 extends Component<Props> {
  constructor(props) {
    super(props);
  }
  progressColor = step => {
    if (step < 0.3) {
      return "red";
    } else if (step >= 0.3 && step < 0.7) {
      return "yellow";
    } else if (step >= 0.7 && step < 1) {
      return "blue";
    } else if (step == 1) {
      return "green";
    }
  };
  render() {
    return (
      <View
        style={{
          height: this.props.viewProgress == true ? 300 : 270,
          margin: 10
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: this.props.width ? this.props.width : screenWidth / 2 - 20,
            height: this.props.height ? this.props.height : 200,
            backgroundColor: "#fff",
            shadowColor: "#999",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: {
              height: 1,
              width: 0
            }
          }}
        >
          <Image
            borderRadius={10}
            source={this.props.image}
            style={{
              width: this.props.width ? this.props.width : screenWidth / 2 - 20,
              height: this.props.height ? this.props.height : 200,
              resizeMode: "cover"
            }}
          />
          {this.props.coursName ? (
            <Text
              style={{
                fontSize: 14,
                marginTop: 15,
                fontWeight: "bold",
                width: 150
              }}
            >
              {this.props.coursName.length > 20
                ? this.props.coursName.substring(0, 15) + "..."
                : this.props.coursName}
            </Text>
          ) : null}
          {this.props.teachBy ? (
            <Text
              style={{
                width: 150,
                fontSize: 12,
                color: "#bbb",
                marginTop: 5,
                marginBottom: 0
              }}
            >
              {this.props.teachBy}
            </Text>
          ) : null}
          {this.props.teachBy ? (
            <Text
              style={{
                width: 150,
                fontSize: 12,
                fontWeight: "bold",
                color: "#0b8457",
                marginTop: 0,
                marginBottom: 0
              }}
            >
              {this.props.price}
            </Text>
          ) : null}
          {this.props.viewProgress == true ? (
            <View>
              {Platform.OS == "ios" ? (
                <ProgressViewIOS
                  progress={this.props.progress}
                  progressViewStyle={"bar"}
                  progressTintColor={this.progressColor(this.props.progress)}
                  trackTintColor={"#eee"}
                  style={{ borderRadius: 50 }}
                />
              ) : (
                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progressTintColor={this.progressColor(this.props.progress)}
                  progress={this.props.progress}
                />
              )}
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}
