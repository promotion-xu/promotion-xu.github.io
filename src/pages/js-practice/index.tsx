import React, { useState } from 'react'
import { Tabs } from 'antd';

const JsPractice = () => {


  const [activeKey, setActiveKey] = useState('1')

  return <div>
     <Tabs activeKey={activeKey}>
      <Tabs.TabPane tab="Tab 1" key="1">
        <div>Content of Tab Pane 1</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        <div>Content of Tab Pane 2</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">
        <div>Content of Tab Pane 3</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 4" key="4">
        <div>Content of Tab Pane 4</div>
      </Tabs.TabPane>
    </Tabs>
  </div>
}

export default JsPractice