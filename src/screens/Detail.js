import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwiperComponent from "../components/SwiperComponent";

const Detail = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: "90%",
        }}
      >
        <View
          style={{
            width: "10%",
            paddingLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../images/17.png")}
              style={{ marginVertical: 40 }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image source={require("../images/11.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image source={require("../images/12.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image source={require("../images/13.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image source={require("../images/14.png")} />
          </View>
        </View>
        <View
          style={{
            width: "90%",
          }}
        >
          <SwiperComponent />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: -80,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            color: "#62636a",
          }}
        >
          Angelica
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 170,
            fontSize: 20,
          }}
        >
          $400
        </Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontWeight: "bold",
          color: "#b1e5d3",
          paddingTop: 3,
          fontSize: 20,
        }}
      >
        Russia
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "50%",
            backgroundColor: "#00a46c",
            height: 60,
            marginTop: 20,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
            }}
          >
            Buy Now
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            // height: 60,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "#62636a",
              fontWeight: "bold",
            }}
          >
            Description
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;
