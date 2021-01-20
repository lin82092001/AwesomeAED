import React, { useState } from 'react'
import {
    StyleSheet, Text,
} from 'react-native'
import { Videos } from './video/Videos'
import { Classify } from './tf/Classify'
import { TabBar, Icon } from '@ant-design/react-native'

const styles = StyleSheet.create({
    tabs: {
        color: '#222666'
    },
    iconStyles: {

    },
    title: {
        fontSize: 13
    }
});

export const Main = () => {
    const [selectTab, setSelectTab] = useState("Classify")

    return (
        <>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title={<Text style={styles.title}>Video</Text>}
                    key="Video"
                    selected={selectTab === "Video"}
                    onPress={() => {
                        setSelectTab("Video")
                    }}
                    icon={<Icon style={styles.iconStyles} name="desktop" />}
                    iconStyle={styles.iconStyles}
                >
                    <Videos />
                </TabBar.Item>
                <TabBar.Item
                    title={<Text style={styles.title}>Classify</Text>}
                    key="Classify"
                    selected={selectTab === "Classify"}
                    onPress={() => {
                        setSelectTab("Classify")
                    }}
                    icon={<Icon style={styles.iconStyles} name="cluster" />}
                    iconStyle={styles.iconStyles}
                >
                    <Classify />
                </TabBar.Item>
            </TabBar>
        </>
    )
}