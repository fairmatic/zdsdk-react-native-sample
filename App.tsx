/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Zendrive, { ZendriveDriveDetectionMode} from 'react-native-zendrive';
import { ZendriveAttributes } from 'react-native-zendrive';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const setup = () => {
    console.log("Zendrive SDK Setup called");
    
    let zendriveAttributes: ZendriveAttributes = {
      alias: 'Firstname Lastname',
    };

    Zendrive.setup({
      driverId: 'your_driver_id',
      sdkKey: 'your_sdk_key',
      driveDetectionMode: ZendriveDriveDetectionMode.INSURANCE,
      attributes: zendriveAttributes
    }).then(result => {
      console.log(result);
    });
  };

  const handleTeardown = () => {
    console.log("Teardown called");
    Zendrive.teardown().then(result => {
      console.log(result);
    });
  };

  const handleStartPeriod1 = () => {
    console.log("Start Period 1");
    Zendrive.insurance().startDriveWithPeriod1().then(result => {
      console.log(result);
    });
  };

  const handleStartPeriod2 = () => {
    console.log("Start Period 2");
    Zendrive.insurance().startDriveWithPeriod2('trackingId').then(result => {
      console.log(result);
    });
  };

  const handleStartPeriod3 = () => {
    console.log("Start Period 3");
    Zendrive.insurance().startDriveWithPeriod3('trackingId').then(result => {
      console.log(result);
    });
  };

  const handleStopPeriod = () => {
    console.log("Stop period");
    Zendrive.insurance().stopPeriod().then(result => {
      console.log(result);
    });

    Zendrive.permissions().request
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{padding: 20}}>
            <Button title="Setup" onPress={setup} />
          </View>
          <View style={{padding: 20}}>
            <Button title="Teardown" onPress={handleTeardown} />
          </View>
          <View style={{padding: 20}}>
            <Button title="Start Period 1" onPress={handleStartPeriod1} />
          </View>
          <View style={{padding: 20}}>
            <Button title="Start Period 2" onPress={handleStartPeriod2} />
          </View>
          <View style={{padding: 20}}>
            <Button title="Start Period 3" onPress={handleStartPeriod3} />
          </View>
          <View style={{padding: 20}}>
            <Button title="Stop period" onPress={handleStopPeriod} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
