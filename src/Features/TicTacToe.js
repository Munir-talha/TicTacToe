import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    ticTacToe : [
        {
            id:1,
            winCount : 0
        }
    ]
}

const ticTacToeSlice = createSlice({
    name : "ticTacToe",
    initialState,
    reducers : {
        addWin : (state , action) => {
            const winner = state.ticTacToe.find((winner)=> winner.id === action.payload.id)
            if(winner)
            {
                winner.winCount++
            }

            state.ticTacToe.push(winner)
        }
    }
})

export const {addWin} = ticTacToeSlice.actions

export default ticTacToeSlice.reducer