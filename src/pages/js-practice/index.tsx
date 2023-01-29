import React, { useState } from 'react'
import { Tabs } from 'antd';
import { getList } from '../../utils'

let tab_bar_style = {
  style: {
    color: 'red',
    fontSize: 16,
    background: 'blue',
    fontWeight: 600
  }
}

const object = {}

const JsPractice = () => {


  const [activeKey, setActiveKey] = useState('1')


  const tabClick = () => {
    setActiveKey('1')
  }

  const handleTabChange = (key: string) => {
    setActiveKey(key)
  }

  const tabClick4 = () => {
    tab_bar_style.style.color = 'blue'
    tab_bar_style.style.background = 'red'
  }

  const tabClick1 = () => {
    tab_bar_style.style = {
      color: 'blue',
      background: 'red'
    }
  }

  const tabClick3 = () => {
    if (!object || object?.arr?.length === 0) {
      console.log('null')
    }
  }

  return <div>
     <Tabs activeKey={activeKey} onChange={handleTabChange} tabBarStyle={tab_bar_style.style}>
      <Tabs.TabPane tab="Tab 1" key="1">
        <div onClick={tabClick1}>Content of Tab Pane 1</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="2">
        <div onClick={tabClick}>Content of Tab Pane 2</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 3" key="3">
        <div onClick={tabClick3}>Content of Tab Pane 3</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tab 4" key="4">
        <div onClick={tabClick4}>Content of Tab Pane 4</div>
      </Tabs.TabPane>
    </Tabs>
  </div>
}

export default JsPractice