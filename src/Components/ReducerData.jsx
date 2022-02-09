export const ReducerData = (state, action) => {
  switch (action.type) {
    case "num9":
      return [...state, 9];
    case "num8":
      return [...state, 8];
    case "num7":
      return [...state, 7];
    case "num6":
      return [...state, 6];
    case "num5":
      return [...state, 5];
    case "num4":
      return [...state, 4];
    case "num3":
      return [...state, 3];
    case "num2":
      return [...state, 2];
    case "num1":
      return [...state, 1];
    case "num0":
      return [...state, 0];
   case "num00":
      return [...state, "00"];
    case "add":
      return [...state, "+"];
    case "sub":
      return [...state, "-"];
    case "mul":
      return [...state, "x"];
    case "div":
      return [...state, "/"];
    case "ans":

      if (state.includes("+")) {
        var add = state.join("").split("+");
        return [add.reduce((a, b) => parseInt(a) + parseInt(b))];
      }

      if (state.includes("-")) {
        var sub = state.join("").split("-");
        return [sub.reduce((a, b) => parseInt(a) - parseInt(b))];
      }

      if (state.includes("x")) {
        var mul = state.join("").split("x");
        return [mul.reduce((a, b) => parseInt(a) * parseInt(b))];
      }

      if (state.includes("/")) {
        var div = state.join("").split("/");
        return [div.reduce((a, b) => parseInt(a) / parseInt(b))];
      } else {
        return state;
      }

    case "clear":
      return [""];
    
    default:
      return "Error";
  }
};
