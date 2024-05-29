import { View, Text } from 'react-native'
import React from 'react'
//Nested 
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"

const Tabs=createMaterialTopTabNavigator();
//Import or create Different categories
import StearingWheels from './nested/StearingWheels';
import Wheels from './nested/Wheels';
import Shades from './nested/Shades';
import AshTray from './nested/AshTray';
import Speakers from './nested/Speakers';
import Antena from './nested/Antena';
import Bumpers from './nested/Bumpers';
import Covers from './nested/Covers';
import DoorGuards from './nested/DoorGuards';
import DoorMoulds from './nested/DoorMoulds';
import Gadgets from './nested/Gadgets';
import Lightings from './nested/Lightings';
import Polishers from './nested/Polishers';
import Rims from './nested/Rims';
import RustSpray from './nested/RustSpray';
import Seatings from './nested/Seatings';
import Stickers from './nested/Stickers';
import Sprays from './nested/Sprays';
const CategoryTabs = () => {
  return (
   <Tabs.Navigator>
    <Tabs.Screen name='stearings'  component={StearingWheels}/>
    <Tabs.Screen   name='wheels' component={Wheels}/>
    <Tabs.Screen  name='shades' component={Shades}/>
    <Tabs.Screen  name='ashtray'  component={AshTray}/>
    <Tabs.Screen   name='speakers' component={Speakers}/>
    <Tabs.Screen name='antena'  component={Antena}/>
    <Tabs.Screen   name='bumpers' component={Bumpers}/>
    <Tabs.Screen   name='covers' component={Covers}/>
    <Tabs.Screen   name='doorguards' component={DoorGuards}/>
    <Tabs.Screen   name='doormoudls'component={DoorMoulds}/>
    <Tabs.Screen   name='gadgets' component={Gadgets}/>
    <Tabs.Screen   name='lightings' component={Lightings}/>
    <Tabs.Screen  name='polishers' component={Polishers}/>
    <Tabs.Screen  name='rims' component={Rims}/>
    <Tabs.Screen name='rustsprays' component={RustSpray}/>
    <Tabs.Screen  name='seatings' component={Seatings}/>
    <Tabs.Screen name='stickers' component={Stickers}/>
    <Tabs.Screen name='sprays' component={Sprays}/>
   </Tabs.Navigator>
  )
}

export default CategoryTabs