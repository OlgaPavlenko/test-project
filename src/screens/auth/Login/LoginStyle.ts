import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  // input: {
  //   color: '#000000',
  // },
  form: {
    // marginHorizontal: 40,
  },
  inputTitle: {
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
    fontFamily: 'DMMono-Regular',
  },
  singUpOption: {
    marginBottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'transparent',
        borderColor: '#000000',
      },
      android: {
        backgroundColor: '#000000',
        borderColor: 'transparent',
      },
    }),
  },
  btnSkip: {
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {
    color: Platform.OS === 'ios' ? '#4169e1' : '#f0f8ff',
    fontSize: 18,
    fontFamily: 'DMMono-Regular',
    textTransform: 'uppercase',
  },
  btnSkipText: {
    color: Platform.OS === 'ios' ? 'black' : 'black',
    fontSize: 18,
    fontFamily: 'DMMono-Regular',
    textTransform: 'uppercase',
  },
  header: {
    alignItems: 'center',
    marginBottom: 120,
    // marginLeft: 88,
  },
  headerTitle: {
    marginTop: 62,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerText: {
    fontSize: 40,
    color: '#000000',
  },
  link: {
    marginTop: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
});
