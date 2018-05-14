/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity,
} from 'react-native';
import Storage from 'react-native-realm-sync-storage'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text:"",
    };
  }

  _save(){
    Storage.save("text", {text:"react-native-realm-sync-storage"});
    let text = Storage.get("text");
    this.setState({
      text: text !== null ? text.text : ""
    });
  }

  _delete(){
    Storage.delete("text");
    let text = Storage.get("text");
    this.setState({
      text: text !== null ? text.text : ""
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.text}</Text>

        <TouchableOpacity style={styles.button} onPress={()=>{this._save();}}>
          <Text style={styles.text}>save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={()=>{this._delete();}}>
          <Text style={styles.text}>delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button:{
    backgroundColor:"#f10000",
    width:200,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:100,
    height:64,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  text:{
    color:"white",
    fontSize:28
  },
  deleteButton:{
    backgroundColor:"#f10000",
    width:200,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:50,
    height:64,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
});
