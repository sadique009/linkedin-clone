import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
const MainStack = createNativeStackNavigator();
const SignupStack = createNativeStackNavigator();
const loginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
export {MyDrawer};

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

    {/* <HomeStack.Screen name={Screens.PROFILE} component={Profile} /> */}
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

// for hiding the tab bar when inside "profile" section.
const showTabBar = route => {
  const routeName = getFocusedRouteNameFromRoute(route); // this method is available in "react-navigation".
  return routeName === Screens.PROFILE ? 'none' : 'flex';
};

// this component is for bottom tab icons and their functionality.
const header = (
  navigation,
  route,
  icon,
  title,
  iconLeft = '',

  // by doing this, we are excluding "post screen" and "notification screen" because we have to add extra customizations in them later.
  isPostScreen = false,
  isNotificationScreen = false,
) => ({
  title: title,
  tabBarStyle: {display: showTabBar(route)},
  tabBarBadge: isNotificationScreen ? 5 : null, // this is used to add badge to tab icons.
  tabBarIcon: (
    {focused}, // "focused" parameter is available in "tabBarIcon" prop.
  ) => (
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
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <MainStack.Navigator
        initialRouteName={LoginScreen}
        // name={Screens.LOGIN_STACK}
        // name="Routes"
        component={LoginScreen}
        // component={Routes}
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
          initialRouteName={LoginScreen}
          // name={Screens.LOGIN_STACK}
          // name="Routes"
          component={LoginScreen}
          // component={Routes}
          options={{headerShown: false}}
        /> */}

        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="SignUpScreen" component={SignupScreen} />
        <MainStack.Screen
          name="Routes"
          component={Routes}
          independent={true}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export {Routes1};

export default function Routes() {
  return (
    <>
      <Tab.Navigator
        // don't confuse this with "options".
        screenOptions={{
          tabBarActiveTintColor: Colors.BLACK,
          tabBarInactiveTintColor: Colors.GRAY,
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 12},
          headerStyle: {elevation: 10},
        }}>
        {/* we will pass all the stack screen components inside the tab navigator.  */}
        {/* we are calling "HomeScreen" component here which is further calling our "HOME" page above. */}

        {/* <Tab.Screen
          name="MyDrawer"
          component={MyDrawer}
          independent={true}
          options={({navigation, route}) =>
            header(navigation, route, 'settings', 'Settings')
          }
        /> */}
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={
            ({navigation, route}) => header(navigation, route, 'home', 'Home') // here, "home" is icon name and "Home" is title.
            // these 4 (navigation, route, 'home', 'Home') are the parameters that we have defined in header component above.
          }
        />
        <Tab.Screen
          name="MyDrawer"
          component={MyDrawer}
          independent={true}
          options={({navigation, route}) =>
            header(navigation, route, 'settings', 'Settings')
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
