# Context API in React
The Context API in React is a powerful tool used to manage global state and share data across components without manually passing props through each level of the component tree. It helps reduce prop drilling and simplifies state management in larger applications.

## Key Concepts

**1. React.createContext()** 
- Creates a Context object
- Returns an object with two components:
    - Provider
    - Consumer

``` jsx
const UserContext = React.createContext();
```

### Provider
- The Provider component wraps around child components.
- It holds the state or data that needs to be shared.

### Consumer (Using useContext Hook)
- We can consume the context directly using the useContext hook.