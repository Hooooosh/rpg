import { Screens } from "./screens"
import type { JSX } from "react"
import Sign from "../gameObjects/sign"
import freakpng from "../assets/images/freaquency.png"
import epng from "../assets/images/e.png"
import sobpng from "../assets/images/sob.png"
import { Vector2 } from "../interfaces/Globals"
import EntitySprite from "../components/EntitySprite"
import vista from "../assets/audio/vista.mp3"

export const SpriteData: Record<Screens, JSX.Element[]> = {
    [Screens.HUB]: [
        <Sign position={new Vector2(200, 200)} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac venenatis neque. Phasellus gravida, enim sit amet sodales malesuada, lorem sem sodales odio, quis pulvinar ex eros vel est. Nulla massa arcu, sagittis fringilla dolor at, commodo accumsan tellus. Donec in lacus accumsan, lobortis nibh eu, blandit purus. Vestibulum auctor. " />,
        <Sign position={new Vector2(1300, 100)} text="balls" />,
        <EntitySprite img={freakpng} position={new Vector2(700, -200)} />,
        <EntitySprite img={epng} position={new Vector2(250, 900)} scale={0.5} onInteract={() => {
            const audio = new Audio(vista);
            audio.playbackRate = 1;
            audio.play();
        }} />,
        <EntitySprite img={sobpng} position={new Vector2(550, 800)} scale={0.1} turnTowardPlayer />,
    ],
    [Screens.HOUSE]: [

    ],
}
