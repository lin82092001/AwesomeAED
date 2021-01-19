import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import { Videos } from './video/Videos'
import { Classify } from './tf/Classify'
import {
    Container,
    Tab,
    Tabs
} from 'native-base'

const styles = StyleSheet.create({
    tabs: {
        color: '#222666'
    }
});

export const Main = () => {

    return (
        <Container>
            {/* <Header></Header>
            <Content>
                <Text>Native base</Text>
            </Content>
            <Footer> */}
                <Tabs tabBarPosition="bottom">
                    <Tab heading="Video" >
                        <Videos />
                    </Tab>
                    <Tab heading="Classify">
                        <Classify />
                    </Tab>
                </Tabs>
            {/* </Footer> */}
        </Container>
    )
}