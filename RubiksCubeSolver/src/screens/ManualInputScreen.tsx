import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ManualInputScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ManualInput'>;

type Props = {
  navigation: ManualInputScreenNavigationProp;
};

const ManualInputScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Manual Cube Input</Text>
    {/* TODO: Add CubeGridInput here */}
    <Button title="Solve Cube" onPress={() => navigation.navigate('Solution')} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 24 },
});

export default ManualInputScreen;
