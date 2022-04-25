import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native-paper';
import { styles } from './LoginStyle';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

const initialState = {
  email: '',
  password: '',
};

type authScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export const Login = () => {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(true);
  const [state, setState] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 20 * 2
  );

  const navigation = useNavigation<authScreenProp>();

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 20 : 150,
              width: dimensions,
            }}
          >
            <View style={styles.header}>
              <View>
                <Text style={styles.headerTitle}>Codempire</Text>
                <Text style={styles.headerText}>Cafe</Text>
              </View>
            </View>
            <View>
              <TextInput
                label="Email"
                placeholder="Email"
                placeholderTextColor="#000000"
                // style={styles.input}
                // name="hola"
                textAlign={'center'}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChange={(nativeEvent) => console.log(nativeEvent)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                children={undefined}
                autoComplete={undefined}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                removeClippedSubviews={false}
                label="Password"
                placeholder="Password"
                placeholderTextColor="#000000"
                secureTextEntry={passwordVisible}
                right={
                  <TextInput.Icon
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
                // style={styles.input}
                textAlign={'center'}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                children={undefined}
                autoComplete={undefined}
              />
            </View>
            <View style={styles.singUpOption}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.link}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.link}>Sing Up</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSkip}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.btnSkipText}>skip</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
