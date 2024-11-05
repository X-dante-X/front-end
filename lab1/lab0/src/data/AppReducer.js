const AppReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            return state.filter(item => item.id !== action.id);

        case "rate":
            return state.map(item => {
                if (item.id === action.id) {
                    const newRating = item.rating === 10 ? 0 : item.rating + 1;
                    return { ...item, rating: newRating };
                }
                return item;
            });

        case "edit":
            return state.map(item =>
                item.id === action.item.id ? { ...item, ...action.item } : item
            );

        case "add":
            return [...state, action.item];

        default:
            return state;
    }
};

export default AppReducer;