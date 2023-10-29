import React from "react";

import StackRoutes from "./stackRoutes";
import About from '../pages/About';
import Contact from '../pages/Contact';
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
   <Drawer.Navigator
   drawerContent={CustomDrawer}
    screenOptions={{
        drawerActiveBackgroundColor: '#00dae4',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
    }}
   >
    <Drawer.Screen name="StackRoutes" component={StackRoutes}/>
    <Drawer.Screen name="About" component={About}/>
    <Drawer.Screen name="Contact" component={Contact}/>
   </Drawer.Navigator>
  );
}