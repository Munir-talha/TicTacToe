import { configureStore } from "@reduxjs/toolkit";
import TicTacToe from "../Features/TicTacToe";

export const store = configureStore({
    reducer : TicTacToe
})