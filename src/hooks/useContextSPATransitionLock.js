import React from "react";

export const START_TRANSITION = "START_TRANSITION";
export const END_TRANSITION = "END_TRANSITION";

export const ContextStore = React.createContext({
  SPA: {
    isTransitionDone: true,
    dispatchTransitionType: () => {},
  },
});

function isTransitionDoneReducer(state, action) {
  switch (action.type) {
    case "START_TRANSITION":
      return Object.assign({}, state, {
        isTransitionDone: true,
      });
    case "END_TRANSITION":
      return Object.assign({}, state, {
        isTransitionDone: true,
      });
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [isTransitionDone, dispatchTransitionType] = React.useReducer(
    isTransitionDoneReducer,
    {
      isTransitionDone: true,
    }
  );

  return (
    <ContextStore.Provider
      value={{
        SPA: isTransitionDone,
        dispatchTransitionType,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default ContextProvider;
