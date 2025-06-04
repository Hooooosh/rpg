import { Screens } from "./screens"
import freakpng from "../assets/images/freaquency.png"
import epng from "../assets/images/e.png"
import sobpng from "../assets/images/sob.png"
import vista from "../assets/audio/vista.mp3"
import type GameObject from "../gameObjectClasses/Superclass"
import Sign from "../gameObjectClasses/Sign"
import GenericSprite from "../gameObjectClasses/GenericSprite"
import { Vector2, Vector3 } from "../helpers/Vector"

export const SpriteData: Record<Screens, GameObject[]> = {
    [Screens.HUB]: [
        new Sign({
            position: new Vector2(200, 200),
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac venenatis neque. Phasellus gravida, enim sit amet sodales malesuada, lorem sem sodales odio, quis pulvinar ex eros vel est. Nulla massa arcu, sagittis fringilla dolor at, commodo accumsan tellus. Donec in lacus accumsan, lobortis nibh eu, blandit purus. Vestibulum auctor. "
        }),
        new Sign({
            position: new Vector3(1300, 100, 100),
            text: "balls"
        }),
        new GenericSprite({
            img: freakpng,
            position: new Vector2(700, -200),
            rotation: new Vector3(80, 25, 30)
        }),
        new GenericSprite({
            img: epng,
            position: new Vector2(150, 800),
            spriteW: 100,
            onInteract: () => {
                console.log("asd")
                const audio = new Audio(vista);
                audio.play();
            }
        }),
        new GenericSprite({
            img: sobpng,
            turnTowardPlayer: true,
            position: new Vector2(550, 800),
            spriteW: 50,
            onInteract: undefined,
        }),
    ],
    [Screens.HOUSE]: [

    ],
}

/*
<Sign position={new Vector2(200, 200)} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac venenatis neque. Phasellus gravida, enim sit amet sodales malesuada, lorem sem sodales odio, quis pulvinar ex eros vel est. Nulla massa arcu, sagittis fringilla dolor at, commodo accumsan tellus. Donec in lacus accumsan, lobortis nibh eu, blandit purus. Vestibulum auctor. " />,
<Sign position={new Vector2(1300, 100)} text="balls" />,
 
 
<EntitySprite img={freakpng} position={new Vector2(700, -200)} />,
<EntitySprite img={epng} position={new Vector2(250, 900)} scale={0.5} onInteract={() => {
    
}} />,
<EntitySprite img={sobpng} position={new Vector2(550, 800)} scale={0.1} turnTowardPlayer />,

<EntityGround img={freakpng} width={1000} height={1000} position={new Vector2(-500, 500)} />,
<EntityGround img={epng} width={2000} height={1500} position={new Vector2(-400, 1500)} />,
*/