import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {NullPhoto} from '../../../assets/icon';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const AddPhoto = ({text}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const getImage = async () => {
    const result = await launchImageLibrary({
      maxWidth: 100,
      maxHeight: 100,
      quality: 0.5,
      includeBase64: true,
    });
    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
      setPhoto(NullPhoto);
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      setPhoto({uri: base64});
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <TouchableOpacity onPress={getImage}>
          <View style={styles.innerCircle}>
            <Image source={photo} style={styles.photo} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 26,
  },
  outerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8D92A3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textContainer: {
    position: 'absolute',
    bottom: 30, // Adjusted this value to move text up
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
});
