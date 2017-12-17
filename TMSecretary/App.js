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
import ChartInput from './components/chartInput.js';
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
      failed: "",
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
    switch (updateType) 
    {
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
    .catch((error) => this.setState({ failed: error, }));
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
      })
      .catch((error) => this.setState({ failed: error, }));
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
        <Text style={styles.title}>
          {this.state.date}
        </Text>
        <Text style={styles.body}>
          {this.state.failed}
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
        <Input name="sgtAtArms" type="text" value={this.state.sgtAtArms} placeholder="sgtAtArms" onUserInput={ this.handleUserInput } prefix="" suffix="announced a 2 minute warning." />
        <Input name="attendees" type="text" value={this.state.attendees} placeholder="attendees" onUserInput={ this.handleUserInput } prefix="Attendees:"/>
        <Input name="sgtAtArms" type="text" value={this.state.sgtAtArms} placeholder="sgtAtArms" onUserInput={ this.handleUserInput } prefix="Sgt. at Arms" suffix="called the meeting to attention." />
        <Input name="president" type="text" value={this.state.president} placeholder="president" onUserInput={ this.handleUserInput } prefix="President" suffix="called the meeting to order." />
        <Input name="pledge" type="text" value={this.state.pledge} placeholder="pledge" onUserInput={ this.handleUserInput } prefix="" suffix="led the club in the Pledge of Allegiance." />
        <Input name="pledgeNotes" type="text" value={this.state.pledgeNotes} placeholder="pledgeNotes" onUserInput={ this.handleUserInput } />
        <Input name="president" type="text" value={this.state.president} placeholder="president" onUserInput={ this.handleUserInput } prefix="" suffix="welcomed members and guests," />
        <Input name="guests" type="text" value={this.state.guests} placeholder="guests" onUserInput={this.handleUserInput} />
        <Input name="businessNotes" type="text" value={this.state.businessNotes} placeholder="businessNotes" onUserInput={this.handleUserInput} prefix="During the business meeting," />
        <Input name="toastmaster" type="text" value={this.state.toastmaster} placeholder="toastmaster" onUserInput={this.handleUserInput} prefix="" suffix="was called to the lectern. She made her opening comments and adjusted the agenda." />
        <Input name="generalEvaluator" type="text" value={this.state.generalEvaluator} placeholder="generalEvaluator" onUserInput={this.handleUserInput} prefix="" suffix="discussed her duties and called on her team of functionaries." /> 
        <Input name="grammarian" type="text" value={this.state.grammarian} placeholder="grammarian" onUserInput={this.handleUserInput} prefix="Grammarian:" />
        <Input name="wordOfTheDay" type="text" value={this.state.wordOfTheDay} placeholder="wordOfTheDay" onUserInput={this.handleUserInput} prefix="Word of the Day:" />
        <Input name="ahCounter" type="text" value={this.state.ahCounter} placeholder="ahCounter" onUserInput={this.handleUserInput} prefix="Ah Counter:" />
        <Input name="timer" type="text" value={this.state.timer} placeholder="timer" onUserInput={this.handleUserInput} prefix="Timer:" />
        <Input name="networkMaster" type="text" value={this.state.networkMaster} placeholder="networkMaster" onUserInput={this.handleUserInput} prefix="Networking Session with Networking Master:" />
        <View>
          <View style={styles.table}>
            <Input name="respondent1" type="text" value={this.state.respondent1} placeholder="respondent1" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="respondent1Time" type="text" value={this.state.respondent1Time} placeholder="respondent1Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="respondent2" type="text" value={this.state.respondent2} placeholder="respondent2" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="respondent2Time" type="text" value={this.state.respondent2Time} placeholder="respondent2Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="respondent3" type="text" value={this.state.respondent3} placeholder="respondent3" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="respondent3Time" type="text" value={this.state.respondent3Time} placeholder="respondent3Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="respondent4" type="text" value={this.state.respondent4} placeholder="respondent4" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="respondent4Time" type="text" value={this.state.respondent4Time} placeholder="respondent4Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="respondent5" type="text" value={this.state.respondent5} placeholder="respondent5" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="respondent5Time" type="text" value={this.state.respondent5Time} placeholder="respondent5Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <Text style={styles.center}>Speakers</Text>
        <View>
          <View style={styles.table}>
            <Input name="speaker1" type="text" value={this.state.speaker1} placeholder="speaker1" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="speaker1Time" type="text" value={this.state.speaker1Time} placeholder="speaker1Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="speaker2" type="text" value={this.state.speaker2} placeholder="speaker2" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="speaker2Time" type="text" value={this.state.speaker2Time} placeholder="speaker2Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="speaker3" type="text" value={this.state.speaker3} placeholder="speaker3" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="speaker3Time" type="text" value={this.state.speaker3Time} placeholder="speaker3Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="speaker4" type="text" value={this.state.speaker4} placeholder="speaker4" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="speaker4Time" type="text" value={this.state.speaker4Time} placeholder="speaker4Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="speaker5" type="text" value={this.state.speaker5} placeholder="speaker5" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="speaker5Time" type="text" value={this.state.speaker5Time} placeholder="speaker5Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <Text style={styles.center}>Evaluators</Text>
        <View>
          <View style={styles.table}>
            <Input name="evaluator1" type="text" value={this.state.evaluator1} placeholder="evaluator1" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="evaluator1Time" type="text" value={this.state.evaluator1Time} placeholder="evaluator1Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="evaluator2" type="text" value={this.state.evaluator2} placeholder="evaluator2" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="evaluator2Time" type="text" value={this.state.evaluator2Time} placeholder="evaluator2Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="evaluator3" type="text" value={this.state.evaluator3} placeholder="evaluator3" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="evaluator3Time" type="text" value={this.state.evaluator3Time} placeholder="evaluator3Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="evaluator4" type="text" value={this.state.evaluator4} placeholder="evaluator4" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="evaluator4Time" type="text" value={this.state.evaluator4Time} placeholder="evaluator4Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <View>
          <View style={styles.table}>
            <Input name="evaluator5" type="text" value={this.state.evaluator5} placeholder="evaluator5" onUserInput={this.handleUserInput} />
          </View>
          <View style={styles.table}>
            <Input name="evaluator5Time" type="text" value={this.state.evaluator5Time} placeholder="evaluator5Time" onUserInput={this.handleUserInput} />
          </View>
        </View>
        <Input name="generalEvaluator" type="text" value={this.state.generalEvaluator} placeholder="generalEvaluator" onUserInput={this.handleUserInput} prefix="General Evaluator" suffix="leads Evaulation Session." />
        <Input name="grammarian" type="text" value={this.state.grammarian} placeholder="grammarian" onUserInput={this.handleUserInput} prefix="Grammarian" suffix="noted use of the Word of the Day and Interesting Phrases." />
        <Input name="ahCounter" type="text" value={this.state.ahCounter} placeholder="ahCounter" onUserInput={this.handleUserInput} prefix="Ah Counter" suffix="noted use of ahs and uhs, etc." />
        <Input name="timer" type="text" value={this.state.timer} placeholder="timer" onUserInput={this.handleUserInput} prefix="Timer" suffix="reported the length of Time spoken by Networking Session Respondents, speaker(s) and evaluator(s)." /> 
        <Input name="GEnotes" type="text" value={this.state.GEnotes} placeholder="GEnotes" onUserInput={this.handleUserInput} prefix="In his/her report, the General Evaluator noted" /> 
        <Input name="toastmaster" type="text" value={this.state.toastmaster} placeholder="toastmaster" onUserInput={this.handleUserInput} prefix="Toastmaster" suffix="returned to the lectern, made his/her closing comments and returned control to Acting President" />
        <Input name="president" type="text" value={this.state.president} placeholder="president" onUserInput={this.handleUserInput} />
        <Input name="president" type="text" value={this.state.president} placeholder="president" onUserInput={this.handleUserInput} prefix="President" suffix="called on guests" />
        <Input name="guests" type="text" value={this.state.guests} placeholder="guests" onUserInput={this.handleUserInput} prefix="to give their impression of the meeting." />
        <Input name="notes" type="text" value={this.state.notes} placeholder="notes" onUserInput={this.handleUserInput} prefix="Notes:" />
        <Text>Attendees were reminded to leave a tip for the servers.</Text>
        <Text>Meeting adjourned.</Text>
        <Text style={styles.body}>{this.state.saveTime}</Text>
        <Button 
          title="Save"
          type="submit" 
          name="submit" 
          value="Save" 
          onPress={ () => this.handleSubmit(this.state) } />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  center:
  {
    textAlign: 'center',
  },
  container: 
  {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tableLeft: 
  {
    backgroundColor: '#F5FCFF',
    textAlign: 'left',
  },
  tableRight: 
  {
    backgroundColor: '#F5FCFF',
    textAlign: 'right',
  },
  table: 
  {
    flex: 2,
    backgroundColor: '#F5FCFF',
  },
  title: 
  {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  body: 
  {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});