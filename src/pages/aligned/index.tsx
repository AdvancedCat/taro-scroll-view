import { Component, PropsWithChildren } from "react";
import { View, Text, ScrollView, GridView } from "@tarojs/components";
import "./index.css";
import { generateGridList } from "../../utils";
import GridTile from "../../components/GridTile";

// 吸顶布局示例

export default class Index extends Component<PropsWithChildren> {

  render() {
    const gridList: Array<{sub:string, id:string}> = generateGridList(100, 4);

    return (
      <View className="index">
        <ScrollView
          type="custom"
          scrollY={true}
        >
          {/* 默认 aligned */}
          <GridView type="aligned"  crossAxisCount={3} mainAxisGap={10} crossAxisGap={10}>
            {gridList.map((item, idx) => {
              return (
                <GridTile sub={item.sub} xId={item.id} key={idx}></GridTile>
              );
            })}
          </GridView>
        </ScrollView>
      </View>
    );
  }
}
