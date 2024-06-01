import { useContext, createContext } from "react";
import { initalState } from "./initalState";

const globalStateContext = createContext({
    state: initalState,
    dispatch: () => { }
})

export default function useGlobalState() {
    return useContext(globalStateContext)
}