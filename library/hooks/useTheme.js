import React from "react";
import {atom, useAtom} from "jotai";
import { theme as INITIAL_THEME } from '../pages/api/theme'
const themeAtom = atom(INITIAL_THEME)

const useTheme = () => {
    const [theme, setThemeState] = React.useState()
    const [atomizedTheme, setAtomizedTheme] = useAtom(themeAtom)
    const setTheme = (theme) => setAtomizedTheme(theme)
    const getRequest = async () => {
        const response = await fetch('http://localhost:3000/api/theme', {
            method: "GET"
        })
        return await response.json()
    }
    const setRequest = async (newValue) => {
        const body = JSON.stringify(newValue)
        const response = await fetch('http://localhost:3000/api/theme', {
            method: "POST",
            body
        })
        return await response.json()
    }
    const get = async () => {
        const theme = await getRequest()
        setTheme(theme)
    }

    const set = async (newValue) => {
        const theme = await setRequest(newValue)
        setTheme(theme)
    }

    React.useEffect(() => void get(), [])
    React.useEffect(() => setThemeState(atomizedTheme), [atomizedTheme])
    return {
        theme,
        get,
        set
    }
}

export default useTheme;