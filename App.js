import React, {useEffect, useState, useReducer, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClubScreen from './screens/ClubScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from  './screens/FilterScreen';
import RegisterScreen from  './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';
import FilterContext from './FilterContext';
import UserContext from './UserContext';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


const Stack = createStackNavigator();

const register = (fname, lname, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      const db = getDatabase();
      set(ref(db, 'users/' + auth.currentUser.uid), {
        fname: fname,
        lname: lname,
        email: email
      });
      // user = auth.currentUser.uid;
      // navigation.navigate('DashboardScreen');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode == "auth/invalid-email") {
        updateError("Please enter a valid email");
      } else if (errorCode == "auth/weak-password") {
        updateError("Your password must be at least 6 characters");
      } else {
        updateError(errorMessage);
      }
  })
}


const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // updateUser(auth.currentUser.uid);
        // navigation.navigate('DashboardScreen');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          updateError(error.code + ": " + error.message);
    })
}

const mySignOut = () => {
  signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}


export default function App() {
const [filter, updateFilter] = useState([]);

const auth = getAuth();
const [user, changeUser] = useState('loading');
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    changeUser(auth.currentUser.uid);
    // ...
  } else {
    // User is signed out
    changeUser(null);
  }
});

// const [user, updateUser] = useReducer((prevState, action) => {
//   switch (action.type) {
//     case 'RESTORE_TOKEN':
//       return {
//         ...prevState,
//         userToken: action.token,
//         isLoading: false,
//       };
//     case 'SIGN_IN':
//       return {
//         ...prevState,
//         isSignout: false,
//         userToken: action.token,
//       };
//     case 'SIGN_OUT':
//       return {
//         ...prevState,
//         isSignout: true,
//         userToken: null,
//       };
//   }
// },
// {
//   isLoading: true,
//   isSignout: false,
//   userToken: null,
// });

// const userContext = useMemo(
//   () => ({
//     signIn: (email, password) => {
//       // In a production app, we need to send some data (usually username, password) to server and get a token
//       // We will also need to handle errors if sign in failed
//       // After getting token, we need to persist the token using `SecureStore`
//       // In the example, we'll use a dummy token

//       login(email, password);

//       updateUser({ type: 'SIGN_IN', token: auth.currentUser.uid });
//     },
//     signOut: () => {
//       mySignOut();

//       updateUser({ type: 'SIGN_OUT' });
//     },
//     signUp: async data => {
//       // In a production app, we need to send user data to server and get a token
//       // We will also need to handle errors if sign up failed
//       // After getting token, we need to persist the token using `SecureStore`
//       // In the example, we'll use a dummy token

//       register(fname, lname, email, password);

//       updateUser({ type: 'SIGN_IN', token: auth.currentUser.uid });
//     },
//   }),
//   []
// );

// useEffect(() => {
//   const bootstrapAsync = async () => {
//     let userToken;

//     try {
//       // userToken = await getAuth().getItemAsync(currentUser.uid);
//       userToken = auth.currentUser.uid;
//     } catch (e) {
//       // Restoring token failed
//     }

//     // After restoring token, we may need to validate it in production apps

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     updateUser({ type: 'RESTORE_TOKEN', token: userToken });
//   };

//   bootstrapAsync();
// }, []);

  if (user == 'loading') {
    // We haven't finished checking for the token yet
    return <LoadingScreen />;
}

  return (
    <FilterContext.Provider value={filter}>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          {user == null ? (
            <>
              <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
              <Stack.Screen name="RegisterScreen"
              component={RegisterScreen}/>
            </>
            ) : (
              <>
            <Stack.Screen name="DashboardScreen"
              component={DashboardScreen}
            />
            <Stack.Screen name="SearchScreen"
              component={SearchScreen}
            />
            <Stack.Screen name="FilterScreen"
              component={FilterScreen}
            />
            <Stack.Screen name="ClubScreen"
              component={ClubScreen}
            />
            </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </FilterContext.Provider>
  )
}

