import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import {connect} from 'react-redux'
import {addTodo} from '../actions'


class AddTodo extends Component {
    state = {
        text: ''
    }

    addTodo = (text) => {
        // redux store updater - call reducer
        this.props.dispatch(addTodo(text))
        this.setState({ text: ''})
    }
    render() {
        return (
            <View style={{flexDirection:'row', marginHorizontal: 20}}>
                <TextInput 
                onChangeText={(text) => this.setState({text})} 
                value={this.state.text} placeholder="Add task desc"
                style={{ borderWidth:1, borderColor: 'grey', 
                backgroundColor: 'lightgrey', height: 50, flex: 1, padding: 5}}>
                </TextInput>

                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                    <View style={{height:50, backgroundColor:'lightgrey', alignItems: 'center', 
                    justifyContent: 'center'}}>
                        <Text style={{color: 'green', padding: 10, fontSize: 30 }}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});