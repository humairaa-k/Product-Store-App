export const initialState = JSON.parse(localStorage.getItem("settings")) || {
  theme: "dark",
  view: "grid",
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    case "SET_VIEW":
      return {
        ...state,
        view: action.payload === "list" ? "list" : "grid",
      };

    default:
      return state;
  }
};

export default initialState;
