import React from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import {SketchPicker} from "react-color";
import useTheme from "../hooks/useTheme";

export default function Home() {
    const { theme, set } = useTheme()
    if (!theme) return null;

    return (
        <>
            <div style={{ display: "flex", gap: 10}}>
                <div>
                    <Text variant={"primary"} size={"default"}>Primary</Text>
                    <SketchPicker color={theme.variants.primary} onChange={(color) =>
                        set({ variants: { ...theme.variants, primary: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"secondary"} size={"default"}>Secondary</Text>
                    <SketchPicker color={theme.variants.secondary} onChange={(color) =>
                        set({ variants: { ...theme.variants, secondary: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"light"} size={"default"}>Light</Text>
                    <SketchPicker color={theme.variants.light} onChange={(color) =>
                        set({ variants: { ...theme.variants, light: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"dark"} size={"default"}>Dark</Text>
                    <SketchPicker color={theme.variants.dark} onChange={(color) =>
                        set({ variants: { ...theme.variants, dark: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"success"} size={"default"}>Success</Text>
                    <SketchPicker color={theme.variants.success} onChange={(color) =>
                        set({ variants: { ...theme.variants, success: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"info"} size={"default"}>Info</Text>
                    <SketchPicker color={theme.variants.info} onChange={(color) =>
                        set({ variants: { ...theme.variants, info: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"warning"} size={"default"}>Warning</Text>
                    <SketchPicker color={theme.variants.warning} onChange={(color) =>
                        set({ variants: { ...theme.variants, warning: color.hex }})}/>
                    <br />
                </div>
                <div>
                    <Text variant={"danger"} size={"default"}>Danger</Text>
                    <SketchPicker color={theme.variants.danger} onChange={(color) =>
                        set({ variants: { ...theme.variants, danger: color.hex }})}/>
                    <br />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: 20, gap: 100 }}>
                <div>
                    <div>
                        <Text variant={"primary"} size={"h4"}>Buttons</Text>
                        <div style={{
                            display: 'flex',
                            gap: 10,
                        }}>
                            <Button label={"My primary button"} variant={"primary"}/>
                            <Button label={"My secondary button"} variant={"secondary"}/>
                            <Button label={"My light button"} variant={"light"}/>
                            <Button label={"My dark button"} variant={"dark"}/>
                            <Button label={"My success button"} variant={"success"}/>
                            <Button label={"My info button"} variant={"info"}/>
                            <Button label={"My warning button"} variant={"warning"}/>
                            <Button label={"My danger button"} variant={"danger"}/>
                        </div>
                    </div>
                    <div>
                        <Text variant={"primary"} size={"h4"}>Inputs</Text>
                        <div style={{
                            marginTop: 25,
                            display: 'flex',
                            gap: 10,
                        }}>
                            <Input placeholder={"My primary input"} variant={"primary"}/>
                            <Input placeholder={"My secondary input"} variant={"secondary"}/>
                            <Input placeholder={"My warning input"} variant={"warning"}/>
                            <Input placeholder={"My danger input"} variant={"danger"}/>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", gap: 50}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <Text variant={"primary"} size={"h1"}>Heading 1</Text>
                        <Text variant={"primary"} size={"h2"}>Heading 2</Text>
                        <Text variant={"primary"} size={"h3"}>Heading 3</Text>
                        <Text variant={"primary"} size={"h4"}>Heading 4</Text>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <Text variant={"primary"} size={"h4"}>Primary</Text>
                        <Text variant={"secondary"} size={"h4"}>Secondary</Text>
                        <Text variant={"light"} size={"h4"}>Light</Text>
                        <Text variant={"dark"} size={"h4"}>Dark</Text>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                        <Text variant={"success"} size={"h4"}>Success</Text>
                        <Text variant={"info"} size={"h4"}>Info</Text>
                        <Text variant={"warning"} size={"h4"}>Warning</Text>
                        <Text variant={"danger"} size={"h4"}>Danger</Text>
                    </div>
                </div>
            </div>
        </>
  );
}
