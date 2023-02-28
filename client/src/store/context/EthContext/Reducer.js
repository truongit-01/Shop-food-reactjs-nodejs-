import { actions } from "./actions";

const Reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
      case actions.init:
        return { ...state, ...data };
      default:
        throw new Error("Undefined reducer action type");
    }
};

export {
    Reducer
};