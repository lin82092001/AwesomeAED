import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native'
import {
    WingBlank,

} from "@ant-design/react-native"
import * as tf from '@tensorflow/tfjs'
import { bundleResourceIO } from "@tensorflow/tfjs-react-native"

const styles = StyleSheet.create({
    hint: {
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
export const Classify = () => {
    const [tfReady, setTfReady] = useState(false)

    const tfIsReady = () => {
        tf.ready()
            .then(() => {
                setTfReady(true)
            })
    }

    useEffect(() => {
        tfIsReady()
    })

    return (
        <ScrollView
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <WingBlank size="lg">
                <Text style={styles.hint}>TF Ready : {
                    tfReady ?
                        <Text style={styles.hint}>OK</Text> :
                        <Text style={styles.hint}>NG</Text>
                }</Text>
            </WingBlank>

            <WingBlank size='lg'>

            </WingBlank>
        </ScrollView>
    )
}