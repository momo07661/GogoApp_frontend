// src/contexts/JourneyContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export interface Element {
  id: string;
  type: 'card' | 'paper' | 'photo' | 'map';
  content: string;
}
export interface JourneyState {
  title: string;
  elements: Element[];
}

type JourneyAction =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'ADD_ELEMENT'; payload: Element }
  | { type: 'UPDATE_ELEMENT'; payload: Element }
  | { type: 'REMOVE_ELEMENT'; payload: string };

function journeyReducer(state: JourneyState, action: JourneyAction): JourneyState {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'ADD_ELEMENT':
      return { ...state, elements: [...state.elements, action.payload] };
    case 'UPDATE_ELEMENT':
      return {
        ...state,
        elements: state.elements.map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case 'REMOVE_ELEMENT':
      return {
        ...state,
        elements: state.elements.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
}

const initialState: JourneyState = {
  title: '',
  elements: [],
};

const JourneyContext = createContext<{
  state: JourneyState;
  dispatch: React.Dispatch<JourneyAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const JourneyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(journeyReducer, initialState);

  return (
    <JourneyContext.Provider value={{ state, dispatch }}>
      {children}
    </JourneyContext.Provider>
  );
};

// useJourney 自訂 Hook，方便取用 Context
export const useJourney = () => {
  return useContext(JourneyContext);
};
