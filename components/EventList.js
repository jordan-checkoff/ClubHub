import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import EventItem from './EventItem';

const EventList = ({events}) => {
  return (
    <ScrollView>
      {events.map((event) => {<EventItem event={event}></EventItem>})}
    </ScrollView>
  )}

const styles = StyleSheet.create({
  })

export default EventList;