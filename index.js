import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Hello extends Component {
  render() {
    return (
      <View
        style={{
          height: 26,
          flexDirection: "row",
          height: 26,
          marginLeft: 50,
          marginRight: 50
        }}
      >
        <Text>Hello</Text>
      </View>
    );
  }
}
export class CardImageOne extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          borderRadius: 10,
          marginLeft: 10,
          width: this.props.width,
          height: this.props.height,
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
            width: this.props.width,
            height: this.props.height,
            resizeMode: "cover"
          }}
        />
      </View>
    );
  }
}
