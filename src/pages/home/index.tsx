import React from "react";
import { View, Navigator } from "@tarojs/components";

export default function HomePage() {
  return (
    <View>
      <Navigator url="/pages/address/index">Address</Navigator>
      <Navigator url="/pages/aligned/index">Aligned</Navigator>
      <Navigator url="/pages/sticky/index">Sticky</Navigator>
      <Navigator url="/pages/masonry/index">Masonry</Navigator>
    </View>
  );
}
