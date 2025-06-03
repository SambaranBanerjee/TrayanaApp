import * as Location from 'expo-location';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { supabase } from '../../lib/supabase'; // Ensure this path points to your Supabase client file

const SendSOS = () => {
  const [loading, setLoading] = useState(false);

  const sendSOSRequest = async () => {
    setLoading(true);

    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to send an SOS.');
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const { data, error } = await supabase.from('sos_report').insert([
        {
          // id: '123', // Replace with actual user ID if needed
          latitude,
          longitude,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error('Supabase Error:', error);
        Alert.alert('Error', `Failed to send SOS: ${error.message}`);
      } else {
        console.log('Insert successful:', data);
        Alert.alert('Success', 'SOS sent successfully!');
      }
    } catch (error) {
      console.error('Unexpected Error:', error);
      Alert.alert('Error', 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Disaster Management System</Text>
      <Text style={styles.description}>
        This is a comprehensive app for the user to get help during a disaster from NGOs and Government.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={sendSOSRequest}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Send SOS</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendSOS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },
  button: {
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b71c1c',
  },
  buttonDisabled: {
    backgroundColor: '#e57373',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});