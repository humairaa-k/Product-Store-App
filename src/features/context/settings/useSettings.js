import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

export function useSettings() {
    const context = useContext(SettingsContext);

    if(!context) {
        throw new Error("Settings context must be used inside CounterProvider ")
    }

    return context;
}