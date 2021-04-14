import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length /10)
  });

export const searchFocus = () => ({
  type: constants.SEARCH_FOUCES,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUE,
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER,
  });
export const mouseLeave = ()=>({
    type:  constants.MOUSE_LEAVE,
})
export const changePage = (page) =>({
    type: constants.CHANGEPAGE,
    page:page
})
  

export const getList = () => {
  return (dispath) => {
    console.log(1236777);
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        console.log("1111====", data);
        // const action = changeList(data.data)
        dispath(changeList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
