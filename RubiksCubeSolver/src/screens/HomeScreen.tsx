import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import Cube3DView from '../components/Cube3DView';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const COLORS = [
  { name: 'White', value: '#ffffff' },
  { name: 'Yellow', value: '#ffff00' },
  { name: 'Red', value: '#ff0000' },
  { name: 'Orange', value: '#ffa500' },
  { name: 'Blue', value: '#0000ff' },
  { name: 'Green', value: '#00ff00' },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rubik's Cube Solver</Text>
      <Cube3DView selectedColor={selectedColor} />
      <View style={styles.pickerContainer}>
        {COLORS.map((color) => (
          <TouchableOpacity
            key={color.value}
            style={[styles.colorCircle, { backgroundColor: color.value, borderWidth: selectedColor === color.value ? 3 : 1 }]}
            onPress={() => setSelectedColor(color.value)}
          />
        ))}
      </View>
      <Button title="View Solution" onPress={() => navigation.navigate('Solution')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 200 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 32 },
  pickerContainer: { flexDirection: 'row', marginVertical: 24 },
  colorCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 6,
    borderColor: '#333',
  },
});

export default HomeScreen;
