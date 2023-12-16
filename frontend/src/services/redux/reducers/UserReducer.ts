export interface State {
  user: userData | null;
}

type ActionType<T extends string, P> = {
  type: T;
  payload: P;
};

interface userData {
  id: string;
  fullName: string;
  role: string;
}

const initialState: State = {
  user: null,
};

const UserReducer = (
  state: State = initialState,
  action: ActionType<"LOGIN", userData> | ActionType<"lOGOUT", userData>
) => {
  switch (action.type) {
    case "LOGIN":
      console.log("action.payload");
      console.log(action.payload);

      return {
        ...state,
        user: action.payload,
      };
    case "lOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      console.log("test");
      return state;
  }
};

export default UserReducer;
