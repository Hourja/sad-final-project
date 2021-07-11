const reducer = (state = {}, action) => {
	switch (action.type) {
		case "TOGGLE_DARK_MODE":
			return {
				isDark: !state.isDark
			};
		default:
			return state;
	}
};

export default reducer;