import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Profile, Task, Work } from "../screens/TabScreens";
import { theme } from "../theme";
import { MessageIcon, SearchIcon, TaskIcon, ProfileIcon } from "../../assets";
import React from "react";
import { SCREENS } from "./screens.enum";
export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return <SearchIcon focused={focused} />;
          },
          tabBarActiveTintColor: theme.pallete.menuIcons.activeColor,
          tabBarInactiveTintColor: theme.pallete.menuIcons.defaultborder,
        })}
        name={SCREENS.work}
        component={Work}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return <TaskIcon focused={focused} />;
          },
          tabBarActiveTintColor: theme.pallete.menuIcons.activeColor,
          tabBarInactiveTintColor: theme.pallete.menuIcons.defaultborder,
        })}
        name={SCREENS.task}
        component={Task}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return <MessageIcon focused={focused} />;
          },
          tabBarActiveTintColor: theme.pallete.menuIcons.activeColor,
          tabBarInactiveTintColor: theme.pallete.menuIcons.defaultborder,
        })}
        name={SCREENS.chat}
        component={Chat}
      />
      <Tab.Screen
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return <ProfileIcon focused={focused} />;
          },
          tabBarActiveTintColor: theme.pallete.menuIcons.activeColor,
          tabBarInactiveTintColor: theme.pallete.menuIcons.defaultborder,
        })}
        name={SCREENS.profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
