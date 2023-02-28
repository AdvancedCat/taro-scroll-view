import { Component, PropsWithChildren } from "react";
import {
  View,
  Text,
  ScrollView,
  StickySection,
  StickyHeader,
  ListView,
} from "@tarojs/components";
import "./index.css";
import { generateList } from "../../utils";

// 吸顶布局示例

export default class Index extends Component<PropsWithChildren> {
  render() {
    const list: Array<{ id: string; color: string }> = generateList(20);

    return (
      <View>
        <ScrollView
          scrollY={true}
          style="width: 100%; height: 100%;"
          type="custom"
        >
          <StickySection pushPinnedHeader={true}>
            <StickyHeader>
              <View className="header" style="background-color: red;"></View>
            </StickyHeader>
            <ListView>
              {list.map((item, idx) => {
                return (
                  <View
                    className="cell"
                    key={item.id}
                    style={`background-color: ${item.color};`}
                  >
                    list item {idx}
                  </View>
                );
              })}
            </ListView>
          </StickySection>
          <StickySection>
            <StickyHeader>
              <View className="header" style="background-color: green;"></View>
            </StickyHeader>
            <ListView>
              {list.map((item, idx) => {
                return (
                  <View
                    className="cell"
                    key={item.id}
                    style={`background-color: ${item.color};`}
                  >
                    list item {idx}
                  </View>
                );
              })}
            </ListView>
          </StickySection>
        </ScrollView>
        <View style={{height: '1000px'}}>通过设置StickySection属性pushPinnedHeader，观察StickyHeader的变化</View>
      </View>
    );
  }
}
