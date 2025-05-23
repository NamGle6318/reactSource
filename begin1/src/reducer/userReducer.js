export const initalState = {
  name: "",
  year: "",
  warning: "",
};

export function userReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state, // 불변성을 지키자
        name: action.payload.trim().toLowerCase(),
      };
    case "SET_YEAR": {
      const age = new Date().getFullYear() - action.payload;

      if (age < 18) {
        return {
          ...state,
          warning: "최소 18세 이상이어야 합니다.",
        };
      }

      return {
        ...state,
        year: action.payload,
        warning: "",
      };
    }

    default:
      throw new Error("action type 재 확인하세요");
  }
}
