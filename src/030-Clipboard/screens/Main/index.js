import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Clipboard, TouchableOpacity} from 'react-native';

class MainScreen extends Component {
    constructor()
    {
      super();

      this.state = {clipboardContent: []};
      this.addClipboardToArray = this.addClipboardToArray.bind(this)
    }

    componentDidMount()
    {
        const first = 'www.csystem.org'
        Clipboard.setString(first)
        const {clipboardContent} = this.state
        clipboardContent.push(first)
        this.setState({clipboardContent: clipboardContent})
    }

    updateClipboard(str)
    {
        Clipboard.setString(str)
    }

    async addClipboardToArray()
    {
        try {
            const {clipboardContent} = this.state
            const content = await Clipboard.getString()

            clipboardContent.push(content)
            this.setState({clipboardContent: clipboardContent})
        }
        catch (ex) {
            alert(ex.message)
        }
    }


    setClipboardListView(index, data)
    {
        return (<TouchableOpacity key={index}><Text>{data}</Text></TouchableOpacity>)
    }

    render()
    {
        let {clipboardContent} = this.state

        return (
            <>
                <TextInput
                    style={{width: 200, height: 25, backgroundColor: 'gray'}}
                    onChangeText={text => this.updateClipboard(text)}
                    placeholder="Input text for clipboard"
                    />
                <TouchableOpacity onPress={this.addClipboardToArray}>
                    <Text style={{width: 200, height: 25, backgroundColor: 'gray'}}>Add</Text>
                </TouchableOpacity>

                {
                    clipboardContent.map((data, index) => this.setClipboardListView(index, data))
                }
            </>
        )
    }

}

export default MainScreen
