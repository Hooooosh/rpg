import { Vector3, type Vector2 } from "../interfaces/Globals";
import signImg from "../assets/images/sign.png"
import { usePlayerStore } from "../hooks/usePlayerData";
import GetDistance from "../helpers/Distance";
import EntitySprite from "../components/EntitySprite";
import { useEffect, useState } from "react";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import EntityText from "../components/EntityText";

export default function Sign({ position, text = "" }: { position: Vector2, text?: string }) {

    const getPlayerPos = () => usePlayerStore.getState().position
    const [textShown, setTextShown] = useState(false)

    const SIGN_INTERACTION_RADIUS = 200

    useEffect(() => {
        eventHandler.on(GLOBAL_EVENTS.MOVE, () => {
            setTextShown(GetDistance(getPlayerPos(), position) < SIGN_INTERACTION_RADIUS)
        })
    }, [])

    function interact() {

    }

    return (
        <>

            <EntitySprite
                position={position}
                scale={0.65}
                img={signImg}
                onInteract={interact}
                centered
            />
            <EntityText
                position={new Vector3(position.x, position.y, -230)}
                text={text}
                fontSize={20}
                maxWidth={Math.min(window.innerWidth/3, 1000)}
                isShown={textShown}
                centered
                background
            />
        </>
    )

}
