import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import EventCard from './EventCard.js';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
        list: {
            flex: 1,
            padding: 20,
            backgroundColor: '#F3F3F3'
        }
})

class EventList extends Component {
    state = {
        events: []
    }

   

    componentDidMount(){
       
        setInterval(()=>{
            this.setState({
                events: this.state.events.map(evt =>({
                     ...evt,
                    timer: Date.now(),
                })
                )
            });
        }, 1000);

        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({ events });
    }

    handleAddEvent = ()=>{
        this.props.navigation.navigate('form');
    }

    render() {
        return [
            <FlatList style={styles.list}
                key ="eventListItem"
                data={this.state.events}
                renderItem={({ item }) => <EventCard event= {item}/>}
                keyExtractor = {item => item.id}
            />,

            <ActionButton 
            key ="fab"
            onpress = {this.handleAddEvent}
            buttonColor= "rgba(213, 76, 60, 1)"
            />
        ];
    }
}

export default EventList;