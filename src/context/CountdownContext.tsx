import { createContext, useContext, useEffect, useState } from 'react';

interface CountdownContextData {
  isActive: boolean;
}

export const CountdownContext = createContext({} as CountdownContextData);
