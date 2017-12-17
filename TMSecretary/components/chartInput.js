import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
class chartInput extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(fromUser) 
  {
    this.props.onUserInput
    (
      fromUser, 
      this.props.placeholder
    );
  }
  render () {
    return (
      <View>
        <Text style={styles.fixes}>
          {this.props.prefix ? this.props.prefix + " " : ""}
        </Text>
        <TextInput
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          editable={true}
          placeholder={this.props.placeholder}
          ref={(input) => this.TextInput = input }
          onChangeText={ (input) => this.handleUserInput(input) }
        />
        <Text style={styles.fixes}>
          {this.props.suffix ? " " + this.props.suffix : ""}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  fixes: 
  {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = chartInput;