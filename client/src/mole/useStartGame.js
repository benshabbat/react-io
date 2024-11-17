import { useState } from "react";
const GAME_DURATION = 30;
const NUMBER_OF_HOLES = 5;

export function useStartGame(){
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(GAME_DURATION);
    const [started, setStarted] = useState(false);
    const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));


}