import React, { Component } from "react";
import { Button } from "antd";
import { WechatOutlined, SearchOutlined } from "@ant-design/icons";

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <WechatOutlined />
      </div>
    );
  }
}
