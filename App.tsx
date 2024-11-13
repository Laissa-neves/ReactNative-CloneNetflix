// src/App.tsx
import React from 'react';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      {/* <Login /> */}
      <Home />
    </>
  );
}
