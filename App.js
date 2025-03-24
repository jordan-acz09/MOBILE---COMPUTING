import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import MyPlaylist from './components/MyPlaylist';
import AddSong from './components/AddSong';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={false}
        barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen name="Home" component={Home} />  
        <Tab.Screen name="MyPlaylist" component={MyPlaylist} /> 
        <Tab.Screen name="AddSong " component={AddSong} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 {/* Myplaylist screen: This is one of the screens of JamApp that displays the musics the user listens to. In the final app, there will be a list of playlists instead and the user will be able to delete music from playlists, or even be able to move the music to another playlist  */}

{/*  Home screen: Home Screen is just a welcome page for the JamApp user, in the final app there may be a consideration to have like a "playlist made for you" based on the genre that the user mostly listens to OR the songs that the user listens to the most*/}

 {/* AddSong screen: Addsong screen is the part of the app that will allow users to add songs to their playlist, by typing in the name of the song and its artist.   */}

  {/* Foresight: In the future development of the app, I am considering a profile or account tab, that will have a registered detail of a user, where they can view it or make changes to them as they wish */}

    {/* Foresight: In the future development of the app, I seek to improve the user interface of the app, to be more user-friendly rather than boring. */}