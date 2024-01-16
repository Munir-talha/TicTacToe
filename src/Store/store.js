import { configureStore } from "@reduxjs/toolkit";
import TicTacToe from "../Features/TicTacToe";
import todo from "../Features/TodoFeature";


export const store = configureStore({
    reducer : {
        ticTacToe : TicTacToe,
        Todos : todo,
    }

})