import React, { useReducer, createContext } from "react";

//Types

type stateType = {
  user: string | null;
};

type dispatchType = {
  type: string;
  payload: string;
};

//Reducer
const firebaseReducer = (state: stateType, action: dispatchType) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

//State
const initialState = {
  user: null,
};

//Create context
const AuthContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<dispatchType>;
}>({
  state: initialState,
  dispatch: () => null,
});

//Context provider
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const value = { state, dispatch };

  return (
    <AuthContext.Provider value={value}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
