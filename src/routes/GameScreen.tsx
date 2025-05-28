import { useEffect } from "react";
import HUD from "../components/HUD";
import KeyboardController from "../components/KeyboardController";
import initPlayerMovementHandler from "../helpers/InitPlayerMovementHandler";
import { usePlayerStore } from "../hooks/usePlayerData";
import Scene from "../components/Scene";

export default function GameScreen() {

    const player = usePlayerStore()

    useEffect(() => {
        initPlayerMovementHandler(player);
    }, [])

    return (
        <>
            <KeyboardController />
            <HUD />
            <Scene />
        </>
    )
}

