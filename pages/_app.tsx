// Type imports first
import { Box, GlobalStyles } from '@bigcommerce/big-design';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';

import dotenv from 'dotenv';
dotenv.config();

// Firebase modules in the correct order
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from 'firebase/firestore';

import type { AppProps } from 'next/app';

// External modules
import React from 'react';
import { ThemeProvider } from 'styled-components';



import Header from '../components/header';
import SessionProvider from '../context/session';

// Local imports in the correct order
import { initializeAnalytics } from '../firebaseAnalytics';
import { firebaseConfig } from '../firebaseConfig';

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Firestore initialization
const db = getFirestore(firebase.app());

// Optional: Initialize Analytics - conditionally based on environment
if (typeof window !== 'undefined' && initializeAnalytics) {
    initializeAnalytics();
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Box
                marginHorizontal={{ mobile: 'none', tablet: 'xxxLarge' }}
                marginVertical={{ mobile: 'none', tablet: "xxLarge" }}
            >
                <Header />
                <SessionProvider>
                    {/* Demonstrating use of Firestore instance 'db' */}
                    <Component {...pageProps} db={db} />
                </SessionProvider>
            </Box>
        </ThemeProvider>
    );
};

export default MyApp;
