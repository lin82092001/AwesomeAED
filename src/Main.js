import React, { useState } from 'react'
import {
    StyleSheet, View,
} from 'react-native'
import { Videos } from './video/Videos'
import { Classify } from './tf/Classify'
import { TabBar, Icon } from '@ant-design/react-native'

const styles = StyleSheet.create({
    tabs: {
        color: '#222666'
    }
});

export const Main = () => {
    const [selectedTab, setSelectedTab] = useState("Video")

    return (
        <>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={false}
            >
                <TabBar.Item
                    title="Video"
                    key="Video"
                    selected={selectedTab === "Video"}
                    onPress={() => { setSelectedTab("Video") }}
                    icon={<Icon name="user" />}
                >
                    <Videos />
                </TabBar.Item>
                <TabBar.Item
                    title="Classify"
                    key="Classify"
                    selected={selectedTab === "Classify"}
                    onPress={() => { setSelectedTab("Classify") }}
                    icon={<Icon name="home" />}
                >
                    <Classify />
                </TabBar.Item>
            </TabBar>
        </>
    )
}