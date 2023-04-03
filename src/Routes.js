import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';
import Screens from './Utils/Screens';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Job from './Screens/Job';
import Post from './Screens/Post';
import Notification from './Screens/Notification';
import Network from './Screens/Network';
import Colors from './Utils/Colors';
import {StatusBar} from 'react-native';
import CustomIcon from './Components/CustomIcon';
import HeaderOptions from './Components/HeaderOptions';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();
const loginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();

const Signup = () => (
  <SignupStack.Navigator screenOptions={{headerShown: false}}>
    <SignupStack.Screen name={Screens.SIGNUP} component={SignupScreen} />
  </SignupStack.Navigator>
);
const Login = () => (
  <loginStack.Navigator screenOptions={{headerShown: false}}>
    <loginStack.Screen name={Screens.LOGIN} component={LoginScreen} />
  </loginStack.Navigator>
);
const HomeScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    {/* <HomeStack.Screen name={Screens.SIGNUP} component={SignupScreen} /> */}
    <HomeStack.Screen name={Screens.HOME} component={Home} />
    <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
  </HomeStack.Navigator>
);

const JobScreen = () => (
  <JobStack.Navigator screenOptions={{headerShown: false}}>
    <JobStack.Screen name={Screens.JOB} component={Job} />
  </JobStack.Navigator>
);

const PostScreen = () => (
  <PostStack.Navigator screenOptions={{headerShown: false}}>
    <PostStack.Screen name={Screens.POST} component={Post} />
  </PostStack.Navigator>
);

const NetworkScreen = () => (
  <NetworkStack.Navigator screenOptions={{headerShown: false}}>
    <NetworkStack.Screen name={Screens.NETWORK} component={Network} />
  </NetworkStack.Navigator>
);

const NotificationScreen = () => (
  <NotificationStack.Navigator screenOptions={{headerShown: false}}>
    <NotificationStack.Screen
      name={Screens.NOTIFICATION}
      component={Notification}
    />
  </NotificationStack.Navigator>
);

const showTabBar = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName === Screens.PROFILE ? 'none' : 'flex';
};

const header = (
  navigation,
  route,
  icon,
  title,
  iconLeft = '',
  isPostScreen = false,
  isNotificationScreen = false,
) => ({
  title: title,
  tabBarStyle: {display: showTabBar(route)},
  tabBarBadge: isNotificationScreen ? 5 : null,
  tabBarIcon: ({focused}) => (
    <CustomIcon
      name={icon}
      size={28}
      color={focused ? Colors.BLACK : Colors.GRAY}
    />
  ),
  header: () => (
    <HeaderOptions
      iconLeft={iconLeft}
      navigation={navigation}
      isPostScreen={isPostScreen}
    />
  ),
});

const Routes1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LoginScreen}
        // name={Screens.LOGIN_STACK}
        // name="Routes"
        component={LoginScreen}
        // component={Routes}
        options={{headerShown: false}}>
        {/* <Stack.Screen
          initialRouteName={LoginScreen}
          // name={Screens.LOGIN_STACK}
          // name="Routes"
          component={LoginScreen}
          // component={Routes}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignupScreen} />
        <Stack.Screen
          name="Routes"
          component={Routes}
          independent={true}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Routes1};

export default function Routes() {
  return (
    <>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.BLACK,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarLabelStyle: {fontWeight: 'bold'},
          headerStyle: {elevation: 10},
        }}>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'home', 'Home')
          }
        />
        <Tab.Screen
          name={Screens.NETWORK_STACK}
          component={NetworkScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'people', 'Network')
          }
        />
        <Tab.Screen
          name={Screens.POST_STACK}
          component={PostScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'add-circle', 'Post', 'close', true)
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION_STACK}
          component={NotificationScreen}
          options={({navigation, route}) =>
            header(
              navigation,
              route,
              'notifications',
              'Notifications',
              '',
              false,
              true,
            )
          }
        />
        <Tab.Screen
          name={Screens.JOB_STACK}
          component={JobScreen}
          options={({navigation, route}) =>
            header(navigation, route, 'briefcase', 'Jobs')
          }
        />
      </Tab.Navigator>
    </>
  );
}
