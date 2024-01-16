import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    ticTacToe : [
        {
            id:1,
            winCount : 0
        },
        {
            id:2,
            winCount : 0
        }
    ]
}

const ticTacToeSlice = createSlice({
    name : "ticTacToe",
    initialState,
    reducers : {
        addWin : (state , action) => {
            const winner = state.ticTacToe.find((winner)=> winner.id === action.payload)
            if(winner)
            {
                winner.winCount++
            }
            else{
                console.log("no winner found" , action.payload)
            }

        }
    }
})

export const {addWin} = ticTacToeSlice.actions

export default ticTacToeSlice.reducer