### Authentication system created using React JS, Firebase, React Router, Context API. Features contain creating accounts (Signing Up), Signing up with Google, logging in to existing accounts, logging out of existing accounts, toggling between sign up and login pages, toggle between login in and log out in the header, and lastly private routes, that is the user can access certain pages only after logging in or signing up. Authentication State Changes are maintained.


# CONTEXT API
### Share authentication state with other components across the application.
### Access data from anywhere by avoiding 'Props Drilling'.

### CONTEXT API SETUP
- Create UserContext.
- Context Provider with passed children.
- Set the UserContext in 'index.js' file.
- To consume the context, export the AuthContext from UserContext.
- Now use the useContext() hook to access the information from anywhere.

### Authentication(Auth) Integration

- Use getAuth by passing app from the 'firebase.config.js' file.
- Create a function named createUser(auth, email, password) to return createUserWithEmailAndPassword(auth, email, password).
- Now ```onAuthStateChanged()``` is used to maintain the change in authentication states of each user.
- Authentication state can change for 3 reasons.

1. When a user signs up for a new account, a user is created.
2. When a user logs in to an existing account.
3. When a user signs out from their account.

```
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Auth State Changed', currentUser);
    })
    return () => {
      unsubscribe();
    }
  },[])
```
- Since the ```onAuthStateChanged()``` function is an outside function, it is called a side effect for which the whole thing is done within a useEffect() hook.