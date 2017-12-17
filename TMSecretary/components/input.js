import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
class Input extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput() {
    this.props.onUserInput(
      this.formInput.value, 
      this.props.placeholder
    );
  }
  render ()
  {
    return (
      <View>
        <Text style={styles.fixes}>
          {this.props.prefix ? this.props.prefix + " " : ""}
        </Text>
        <TextInput
          name={this.props.name}
          editable={true}
          ref={(input) => this.formInput = input}
          onChangeText={() => this.handleUserInput() }
        />
        <Text style={styles.fixes}>
          {this.props.suffix ? " " + this.props.suffix : ""}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  fixes: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = Input;