import { usePlayerStore } from "../hooks/usePlayerData";
import { useEffect, useState } from "react";
import { eventHandler, GLOBAL_EVENTS } from "../helpers/EventHandler";
import Sign from "../gameObjectClasses/Sign";
import { Vector3 } from "../helpers/Vector";
import GenericSpriteElement from "./GenericSpriteElement";
import Text from "../gameObjectClasses/Text";
import TextElement from "./TextElement";

export default function SignElement({ sign }: { sign: Sign }) {

    const getPlayerPos = () => usePlayerStore.getState().position
    const [textShown, setTextShown] = useState(false)

    const textElement = new Text({
        position: new Vector3(sign.position.x, sign.position.y, sign.position.z - 220),
        text: sign.text
    })

    const SIGN_INTERACTION_RADIUS = 200

    useEffect(() => {
        eventHandler.on(GLOBAL_EVENTS.MOVE, () => {
            const shown = getPlayerPos().getDistanceFrom(sign.position) < SIGN_INTERACTION_RADIUS
            setTextShown(shown)
        })
    }, [])

    return (
        <>

            <GenericSpriteElement
                object={sign}
            />
            <TextElement
                text={textElement}
                isShown={textShown}
            />
        </>
    )

}
