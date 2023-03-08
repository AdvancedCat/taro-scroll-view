import React, { Fragment, useCallback, useEffect } from "react";
import {
  View,
  ScrollView,
  StickySection,
  StickyHeader,
  ListView,
  Block,
  RootPortal,
} from "@tarojs/components";
import Taro from '@tarojs/taro'
import "./AddressBook.css";

function someWorklet(greeting) {
  'worklet';
  console.log('hello', greeting); // print: [ui] hello Skyline
}

export default function AddressBook({ list, children }) {

  useEffect(() => {
    (Taro as any).worklet.runOnUI(someWorklet)('Skyline')
  }, [])

  const alphabet = list.map((item, index) => {
    // this.data._tops[index] = 2e10;
    return item.alpha;
  });

  // const handlePan = useCallback(function () {}, []);

  const updateCurrent = useCallback(function(idx) {
    // if (this.data.touching) return
    // this.setData({ current: this.data.alphabet[idx] })
    console.log('我也运行了', idx)
  }, [])

  const handleScroll = useCallback((e) => {
    "worklet";
    const scrollTop = e.detail.scrollTop;
    // 用于计算每个 header 的 offsetTop
    // this._sharedScrollTop.value = scrollTop;

    // 下面判断当前选中态，按需更新
    // const tops = this._sharedTops.value;
    // for (let i = tops.length - 1; i >= 0; i--) {
    //   // header 超过屏幕一半就改为选中态
    //   if (scrollTop + this._sharedHeight.value / 2 > tops[i]) {
    //     if (i !== this._sharedCurrentIdx.value) {
    //       // worklet 函数运行在 UI 线程，setData 调用要抛回 JS 线程执行
          (Taro as any).worklet.runOnJS(updateCurrent.bind(this))(0);
    //     }
    //     break;
    //   }
    // }
    (Taro as any).worklet.runOnUI(updateCurrent.bind(this))(0);
    console.log('监听滑动事件', scrollTop)
  }, []);



  return (
    <Fragment>
      <ScrollView
        className="scroll-view"
        type="custom"
        scrollY={true}
        showScrollbar={false}
        scrollIntoView=""
        onScroll={handleScroll}
      >
        {children}
        {list.map((item) => {
          return (
            <StickySection key={item.alpha}>
              <StickyHeader>
                <View className="city-group__title tips-color" id={item.alpha}>
                  {item.alpha}
                </View>
              </StickyHeader>
              <ListView>
                <View className="city-group__content">
                  <View className="city-group__list">
                    {item.subItems.map((subItem) => {
                      return (
                        <Block key={subItem.name}>
                          <View
                            className="city-group__item thin-border-bottom"
                            hoverClass="bg-highlight"
                          >
                            {subItem.name}
                          </View>
                        </Block>
                      );
                    })}
                  </View>
                </View>
              </ListView>
            </StickySection>
          );
        })}
      </ScrollView>
      <RootPortal>
        <View
          className="wx-flex right-directory"
          onTouchStart="handlePan"
          onTouchMove="handlePan"
          onTouchEnd="cancelPan"
        >
          <View className="anchor-bar">
            <View className="anchor-list">
              {alphabet.map((alpha, idx) => {
                return (
                  <Block key={idx}>
                    <View data-alpha={alpha}>
                      <View className="anchor-item {{current == alpha ? ( touching ? 'selected tapped' : 'selected' ): ''}}">
                        <View className="anchor-item__inner">{alpha}</View>
                        <View className="anchor-item__pop">
                          {alpha}
                          <View className="anchor-item__pop_after"></View>
                        </View>
                      </View>
                    </View>
                  </Block>
                );
              })}
            </View>
          </View>
        </View>
      </RootPortal>
    </Fragment>
  );
}
