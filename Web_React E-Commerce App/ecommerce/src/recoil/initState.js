import { atom } from "recoil";

export const addRess = atom({
  key: "addRess",
  default: "",
});
export const initState = atom({
  key: "initText",
  default: "",
});

// export const newinitState = selector({
//   key: "newInitState",
//   get: ({ get }) => {
//     const currentInit = get(initState);
//     return currentInit.filter((init:any) => init.status === "new");
//   },
// });
export default initState;
