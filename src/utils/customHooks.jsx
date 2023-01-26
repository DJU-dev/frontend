import { useState } from "react";
import Axios from "axios";
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

function useWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export async function useLogin(jwtToken) {
    const headers = {Authorization: `Bearer ${jwtToken}`}
    try {
        const response = await Axios.get('http://127.0.0.1:8000/accounts/my/profile/', {headers})
        const profile = response.data;
        return profile;
    }
    catch (error) {
        console.log("login error")
    }
}