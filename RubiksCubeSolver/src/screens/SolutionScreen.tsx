import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type SolutionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Solution'>;

type Props = {
  navigation: SolutionScreenNavigationProp;
};

const SolutionScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Solution Steps</Text>
    {/* TODO: Add Cube3DView and SolutionSteps here */}
    <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
});

export default SolutionScreen;
