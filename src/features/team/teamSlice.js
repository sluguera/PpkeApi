import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        value: [],  // Pokémon en el equipo
        seen: []    // Pokémon que se han visto
    },
    reducers: {
        addToTeam: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromTeam: (state, action) => {
            state.value = state.value.filter(pokemon => pokemon !== action.payload);
        },
        markAsSeen: (state, action) => {
            if (!state.seen.includes(action.payload)) {
                state.seen.push(action.payload);
            }
        },
        markAsUnseen: (state, action) => {
            state.seen = state.seen.filter(pokemon => pokemon !== action.payload);
        }
    }
});

export const { addToTeam, removeFromTeam, markAsSeen, markAsUnseen } = teamSlice.actions;
export default teamSlice.reducer;
