import React, { Component } from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from './components/input.js';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<{}> {  
  constructor(props) 
  {
    super(props);
    var wholeDate = new Date() + "";
    var month = wholeDate.substr(4,3);
    var day = wholeDate.substr(8,2);
    var year = wholeDate.substr(11,4);
    var finalDate = month + " " + day + ", " + year;
    this.state = 
    {
      date: finalDate,
      reqDate: "",
      saveTime: "",
      sgtAtArms: "",
      president: "",
      attendees: "",
      pledge: "",
      pledgeNotes: "",
      guests: "",
      businessNotes: "",
      toastmaster: "",
      generalEvaluator: "",
      grammarian: "",
      wordOfTheDay: "",
      ahCounter: "",
      timer: "",
      networkMaster: "",
      respondent1: "",
      respondent1Time: "",
      respondent2: "",
      respondent2Time: "",
      respondent3: "",
      respondent3Time: "",
      respondent4: "",
      respondent4Time: "",
      respondent5: "",
      respondent5Time: "",
      speaker1: "",
      speaker1Time: "",
      speaker2: "",
      speaker2Time: "",
      speaker3: "",
      speaker3Time: "",
      speaker4: "",
      speaker4Time: "",
      speaker5: "",
      speaker5Time: "",
      evaluator1: "",
      evaluator1Time: "",
      evaluator2: "",
      evaluator2Time: "",
      evaluator3: "",
      evaluator3Time: "",
      evaluator4: "",
      evaluator4Time: "",
      evaluator5: "",
      evaluator5Time: "",
      GEnotes: "",
      notes: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleMinReq = this.handleMinReq.bind(this);
  }
  handleUserInput(input, updateType)
  {
    switch (updateType) {
      case "sgtAtArms":
        this.setState({ sgtAtArms: input });
        break;
      case "president":
        this.setState({ president: input });
        break;
      case "attendees":
        this.setState({ attendees: input });
        break;
      case "pledge":
        this.setState({ pledge: input });
        break;
      case "pledgeNotes":
        this.setState({ pledgeNotes: input });
        break;
      case "guests":
        this.setState({ guests: input });
        break;
      case "businessNotes":
        this.setState({ businessNotes: input });
        break;
      case "toastmaster":
        this.setState({ toastmaster: input });
        break;
      case "generalEvaluator":
        this.setState({ generalEvaluator: input });
        break;
      case "grammarian":
        this.setState({ grammarian: input });
        break;
      case "wordOfTheDay":
        this.setState({ wordOfTheDay: input });
        break;
      case "ahCounter":
        this.setState({ ahCounter: input });
        break;
      case "timer":
        this.setState({ timer: input });
        break;
      case "networkMaster":
        this.setState({ networkMaster: input });
        break;
      case "respondent1":
        this.setState({ respondent1: input });
        break;
      case "respondent1Time":
        this.setState({ respondent1Time: input });
        break;
      case "respondent2":
        this.setState({ respondent2: input });
        break;
      case "respondent2Time":
        this.setState({ respondent2Time: input });
        break;
      case "respondent3":
        this.setState({ respondent3: input });
        break;
      case "respondent3Time":
        this.setState({ respondent3Time: input });
        break;
      case "respondent4":
        this.setState({ respondent4: input });
        break;
      case "respondent4Time":
        this.setState({ respondent4Time: input });
        break;
      case "respondent5":
        this.setState({ respondent5: input });
        break;
      case "respondent5Time":
        this.setState({ respondent5Time: input });
        break;
      case "speaker1":
        this.setState({ speaker1: input });
        break;
      case "speaker1Time":
        this.setState({ speaker1Time: input });
        break;
      case "speaker2":
        this.setState({ speaker2: input });
        break;
      case "speaker2Time":
        this.setState({ speaker2Time: input });
        break;
      case "speaker3":
        this.setState({ speaker3: input });
        break;
      case "speaker3Time":
        this.setState({ speaker3Time: input });
        break;
      case "speaker4":
        this.setState({ speaker4: input });
        break;
      case "speaker4Time":
        this.setState({ speaker4Time: input });
        break;
      case "speaker5":
        this.setState({ speaker5: input });
        break;
      case "speaker5Time":
        this.setState({ speaker5Time: input });
        break;
      case "evaluator1":
        this.setState({ evaluator1: input });
        break;
      case "evaluator1Time":
        this.setState({ evaluator1Time: input });
        break;
      case "evaluator2":
        this.setState({ evaluator2: input });
        break;
      case "evaluator2Time":
        this.setState({ evaluator2Time: input });
        break;
      case "evaluator3":
        this.setState({ evaluator3: input });
        break;
      case "evaluator3Time":
        this.setState({ evaluator3Time: input });
        break;
      case "evaluator4":
        this.setState({ evaluator4: input });
        break;
      case "evaluator4Time":
        this.setState({ evaluator4Time: input });
        break;
      case "evaluator5":
        this.setState({ evaluator5: input });
        break;
      case "evaluator5Time":
        this.setState({ evaluator5Time: input });
        break;
      case "GEnotes":
        this.setState({ GEnotes: input });
        break;
      case "notes":
        this.setState({ notes: input });
        break;
      default:
        break;
    }
  }
  handleRefresh()
  {
    fetch('https://localbz.co/TM/minutes/' + this.state.date + '.json')
    .then((response) => 
    {
      return response.json();
    })
    .then((initState) => 
    {
      this.setState({
        sgtAtArms: initState.sgtAtArms,
        president: initState.president,
        attendees: initState.attendees,
        pledge: initState.pledge,
        pledgeNotes: initState.pledgeNotes,
        guests: initState.guests,
        businessNotes: initState.businessNotes,
        toastmaster: initState.toastmaster,
        generalEvaluator: initState.generalEvaluator,
        grammarian: initState.grammarian,
        wordOfTheDay: initState.wordOfTheDay,
        ahCounter: initState.ahCounter,
        timer: initState.timer,
        networkMaster: initState.networkMaster,
        respondent1: initState.respondent1,
        respondent1Time: initState.respondent1Time,
        respondent2: initState.respondent2,
        respondent2Time: initState.respondent2Time,
        respondent3: initState.respondent3,
        respondent3Time: initState.respondent3Time,
        respondent4: initState.respondent4,
        respondent4Time: initState.respondent4Time,
        respondent5: initState.respondent5,
        respondent5Time: initState.respondent5Time,
        speaker1: initState.speaker1,
        speaker1Time: initState.speaker1Time,
        speaker2: initState.speaker2,
        speaker2Time: initState.speaker2Time,
        speaker3: initState.speaker3,
        speaker3Time: initState.speaker3Time,
        speaker4: initState.speaker4,
        speaker4Time: initState.speaker4Time,
        speaker5: initState.speaker5,
        speaker5Time: initState.speaker5Time,
        evaluator1: initState.evaluator1,
        evaluator1Time: initState.evaluator1Time,
        evaluator2: initState.evaluator2,
        evaluator2Time: initState.evaluator2Time,
        evaluator3: initState.evaluator3,
        evaluator3Time: initState.evaluator3Time,
        evaluator4: initState.evaluator4,
        evaluator4Time: initState.evaluator4Time,
        evaluator5: initState.evaluator5,
        evaluator5Time: initState.evaluator5Time,
        GEnotes: initState.GEnotes,
        notes: initState.notes,
    });
    })
  }
  handleSubmit(appState)
  {
      fetch('https://localbz.co/TM/minutes/writeNReply.php', 
      {
        method: 'POST',
        body: JSON.stringify(appState)
      })
      .then((response) =>
      {
        return response.text();
      })
      .then((text) =>
      {
        var wholeDate = Date() + "";
        var hours = wholeDate.substr(16,2) % 12;
        var minutes = wholeDate.substr(19,2);
        var res = "" +
          text 
          + " " 
          + hours
          + ":"
          + minutes;
        this.setState({
            saveTime: res
        });
      });
  }
  handleMinReq(date, placeholder)
  {
    this.setState({
      reqDate: date
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.date}
        </Text>
        <Button 
          type="submit" 
          name="Refresh" 
          value="refresh" 
          onPress={ () => this.handleRefresh() }
          title = 'Retrieve Saved Minutes from Database'>
        </Button>
        <Text style={styles.body}>
          DREAMBUILDERS TOASTMATERS CLUB MINUTES for {this.state.date}
        </Text>
        <Input 
          name="sgtAtArms" 
          type="text" 
          value={this.state.sgtAtArms} 
          placeholder="sgtAtArms" 
          onUserInput={this.handleUserInput} 
          prefix="Sgt. at Arms" 
          suffix="announced a 2 minute warning.">
        </Input>
      </ScrollView>
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
  body: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});