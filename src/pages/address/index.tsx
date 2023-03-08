import React, { useState, useEffect } from "react";
import { cityData } from "./data";
import { View } from "@tarojs/components";
import "./index.css";
import AddressBook from "../../components/AddressBook";

export default function AddressPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const cities = cityData;
    // 按拼音排序
    cities.sort((c1, c2) => {
      const pinyin1 = c1.pinyin.join("");
      const pinyin2 = c2.pinyin.join("");
      return pinyin1.localeCompare(pinyin2);
    });
    // 添加首字母
    const map = new Map();
    for (const city of cities) {
      const alpha = city.pinyin[0].charAt(0).toUpperCase();
      if (!map.has(alpha)) map.set(alpha, []);
      map.get(alpha).push({ name: city.fullname });
    }

    const keys: string[] = [];
    for (const key of map.keys()) {
      keys.push(key);
    }
    keys.sort();

    const list: any = [];
    for (const key of keys) {
      list.push({
        alpha: key,
        subItems: map.get(key),
      });
    }

    console.log("address-book list:", list);
    setList(list);
  }, []);

  return (
    <View className="page-container">
      <AddressBook list={list}>
        <View className="page">
          <View className="page__hd">
            <View className="page__title">Address Book</View>
            <View className="page__desc">类通讯录列表</View>
          </View>
          <View className="page__bd"></View>
        </View>
      </AddressBook>
    </View>
  );
}
