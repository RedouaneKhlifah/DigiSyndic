export interface State {
  id: string | null;
  fullName: string | null;
  role: string | null;
}

type ActionType<T extends string, P> = {
  type: T;
  payload: P;
};

type actionsType =
  | ActionType<"LOGIN", userData>
  | ActionType<"lOGOUT", userData>;

interface userData {
  id: string;
  fullName: string;
  role: string;
}

const initialState: State = {
  id: null,
  fullName: null,
  role: null,
};

const UserReducer = (state: State = initialState, action: actionsType) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        id: action.payload.id,
        fullName: action.payload.fullName,
        role: action.payload.role.toLowerCase(),
      };
    case "lOGOUT":
      return {
        ...state,
        id: null,
        fullName: null,
        role: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
