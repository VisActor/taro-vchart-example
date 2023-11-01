import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { BarChart } from "./chart";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Taro VChart demo</Text>
        <BarChart />
      </View>
    );
  }
}
