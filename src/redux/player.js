const SEND_PLAYER_TO_COURT = 'player/SEND_PLAYER_TO_COURT';

const initialState = {
  players: {
    benched: ['griffin', 'pierce', 'crawford', 'steele'],
    onCourt: ['paul', 'redick', 'rivers', 'jordan']
  }
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case SEND_PLAYER_TO_COURT:
      let player = action.payload;

      let court = Array.from(state.players.onCourt);
      let bench = Array.from(state.players.benched);

      bench.splice(bench.indexOf(player), 1);
      court.push(player);

      return {
        players: {
          benched: bench,
          onCourt: court
        }
      }

    default:
    return state;
  }
  return state;
}
