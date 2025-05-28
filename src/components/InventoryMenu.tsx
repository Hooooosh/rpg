import { useGameStore } from "../hooks/useGameData";


export default function InventoryMenu() {
    const gameData = useGameStore();

    return (
        <div 
        className={`w-[400px] h-screen fixed top-0 right-0 duration-300 bg-green-500`}
        style={{ transform: gameData.isInventoryOpen ? "translateX(0%)" : "translateX(100%)"}}>
            <div className="capitalize text-[25px] font-bold">items</div>
        </div>
    )
}