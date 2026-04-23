
export const initialState = JSON.parse(localStorage.getItem("settings")) || {
  theme: "dark",
  view: "grid"
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark"
      };

    case "TOGGLE_VIEW":
      return {
        ...state,
        view: state.view === "grid" ? "list" : "grid"
      };

    default:
      return state;
  }
};

export default initialState;