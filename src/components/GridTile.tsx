import React from "react";
import { View } from "@tarojs/components";

export default function GridTile({ xId, sub }) {
  return (
    <View
      className="center"
      style={`width: 100%; height: ${
        100 * sub
      }px; background-color: #ccc;`}
    >
      <View
        className="center"
        style="width: 60px; height: 60px; border-radius: 30px; background-color: white; color: black;"
      >
        {xId}
      </View>
    </View>
  );
}
