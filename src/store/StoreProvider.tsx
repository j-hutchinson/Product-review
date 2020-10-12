import React, { createContext, useReducer } from 'react';
import { ActionType, StoreType } from '../types';
import reducer, { initialState } from './reducers';

interface Props {
    children: JSX.Element | JSX.Element[];
}

interface ContextType {
    state: StoreType;
    dispatch: (action: ActionType) => void;
}

export const StoreContext = createContext<ContextType>(null);

export const StoreProvider = ({ children }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

