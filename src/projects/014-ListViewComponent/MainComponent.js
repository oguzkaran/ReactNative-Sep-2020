import React, {useState} from 'react';
import { StyleSheet, Text} from 'react-native';

import {SampleComponent} from './SampleComponent.js'

const MainComponent = () => {
    return (
        <>
            <Text>C ve Sistem Programcıları Derneği</Text>
            <SampleComponent/>
        </>
    )
}


export {MainComponent}
