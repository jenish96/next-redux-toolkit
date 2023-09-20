"use client"

import { Store } from "./store";
const { Provider } = require("react-redux");

export function Providers({ children }) {
    return <Provider store={Store}>
        {children}
    </Provider>
}