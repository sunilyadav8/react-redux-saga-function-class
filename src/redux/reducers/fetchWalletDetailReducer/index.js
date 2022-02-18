export default function reducer(
  state = {
    fetchWallet: [],
  },
  action,
) {
  switch (action.type) {
    case 'FETCH_WALLET_DETAILS_SUCCESS': {
      return { ...state, fetchWallet: action.payload };
    }
    case 'FETCH_WALLET_DETAILS_FAILED': {
      return { ...state, fetchWallet: action.payload };
    }
    default: {
      return state;
    }
  }
}
