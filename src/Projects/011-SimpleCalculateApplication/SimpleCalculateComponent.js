import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


const SimpleCalculateComponent = () => {
    const [firstNumberText, setFirstNumberText] = useState("")
    const [secondNumberText, setSecondNumberText] = useState("")
    const [sumResultText, setSumResultText] = useState("")
    const [multiplyResultText, setMultiplyResultText] = useState("")

    const clearResultTexts = () => {
        setSumResultText("")
        setMultiplyResultText("")
    }

    const onCalculateTouchableOpacityPressed = () => {
        clearResultTexts()
        let a = parseInt(firstNumberText)
        let b = parseInt(secondNumberText)

        if (isNaN(a) || isNaN(b)) {
            alert("Hatalı giriş yaptınız")
            return
        }

        setSumResultText(`${a} + ${b} = ${a + b}`)
        setMultiplyResultText(`${a} * ${b} = ${a * b}`)
    }

    const onClearTouchableOpacityPressed = () => {
        setFirstNumberText("")
        setSecondNumberText("")
        clearResultTexts()
    }

    return (
        <>
            <TextInput style={{width: 150, height: 25, backgroundColor: 'gray'}} value={firstNumberText} onChangeText={text => setFirstNumberText(text)}
                    placeholder="Birinci sayıyı yazınız"/>
            <TextInput style={{width: 150, height: 25}} value={secondNumberText} onChangeText={text => setSecondNumberText(text)}
                    placeholder="İkinci sayıyı yazınız"/>
            <Text>{sumResultText}</Text>
            <Text>{multiplyResultText}</Text>
            <TouchableOpacity onPress={onCalculateTouchableOpacityPressed}>
              <Text style={{width: 150, height: 25, backgroundColor: "blue", textAlign: 'center'}}>Hesapla</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClearTouchableOpacityPressed}>
              <Text style={{width: 150, height: 25, backgroundColor: "red", textAlign: 'center'}}>Temizle</Text>
            </TouchableOpacity>
        </>
    )
}


export {SimpleCalculateComponent}
