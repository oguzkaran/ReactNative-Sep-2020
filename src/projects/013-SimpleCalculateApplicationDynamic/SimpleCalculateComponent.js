import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, Switch } from 'react-native';

const SimpleCalculateComponent = props => {
    const [firstNumberText, setFirstNumberText] = useState("")
    const [secondNumberText, setSecondNumberText] = useState("")
    const [sumResultText, setSumResultText] = useState("")
    const [multiplyResultText, setMultiplyResultText] = useState("")
    const [isOpenSwitchEnabled, setOnSwicthEnabled] = useState(true)

    const isAllDigit = text => {
        let len = text.length

        if (len == 0)
            return false

        for (let i = 0; i < len; ++i)
            if (isNaN(parseInt(text[i])))
                return false

        return true
    }

    const isNotAllDigit = text => !isAllDigit(text)

    const clearResultTexts = () => {
        setSumResultText("")
        setMultiplyResultText("")
    }

    const clearAllTexts = () => {
        clearResultTexts()
        setFirstNumberText("")
        setSecondNumberText("")
    }

    const doCalculate = (a, b) => {
        setSumResultText(`${a} + ${b} = ${a + b}`)
        setMultiplyResultText(`${a} * ${b} = ${a * b}`)
    }

    const setWrongInputMessages = () => {
        setSumResultText(props.wrongInputMessage)
        setMultiplyResultText(props.wrongInputMessage)
    }

    const onCalculate = (firstText, secondText) => {
        clearResultTexts()

        if (isNotAllDigit(firstText) || isNotAllDigit(secondText)) {
            setWrongInputMessages()
            return
        }

        doCalculate(parseInt(firstText), parseInt(secondText))
    }

    const onClearTouchableOpacityPressed = () => {
        setFirstNumberText("")
        setSecondNumberText("")
        clearResultTexts()
    }

    const onFirstNumberChangeText = text => {
        if (!isOpenSwitchEnabled) {
            clearAllTexts()
            return
        }
        setFirstNumberText(text)
        onCalculate(text, secondNumberText)
    }

    const onSecondNumberChangeText = text => {
        if (!isOpenSwitchEnabled) {
            clearAllTexts()
            return
        }
        setSecondNumberText(text)
        onCalculate(firstNumberText, text)
    }

    const onOpenSwitchValueChange = () => {
        setOnSwicthEnabled(!isOpenSwitchEnabled)

        if (isOpenSwitchEnabled)
            clearAllTexts()
    }

    return (
        <>
            <TextInput style={{width: 150, height: 25}} value={firstNumberText} onChangeText={onFirstNumberChangeText}
                    placeholder={props.hintFirst}/>
            <TextInput style={{width: 150, height: 25}} value={secondNumberText} onChangeText={onSecondNumberChangeText}
                    placeholder={props.hintSecond}/>
            <Text>{sumResultText}</Text>
            <Text>{multiplyResultText}</Text>
            <TouchableOpacity onPress={onClearTouchableOpacityPressed}>
              <Text style={{width: 150, height: 25, backgroundColor: "gray", textAlign: 'center'}}>Temizle</Text>
            </TouchableOpacity>
            <Switch value={isOpenSwitchEnabled} onValueChange={onOpenSwitchValueChange} />
        </>
    )
}


export {SimpleCalculateComponent}
