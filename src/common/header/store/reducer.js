import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  mouseIn:false,
  list: [],
  page:1,
  totalPage:1
});
//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOUCES:
      return state.set("focused", true);
    case constants.SEARCH_BLUE:
      return state.set("focused", false);
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      })
      // state.set("list", action.data).set('totalPage',action.totalPage);
    case  constants.MOUSE_ENTER:
      return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn',false);
    case constants.CHANGEPAGE:
      return state.set('page',action.page)
    default:
      return state
  }
  // if (action.type === constans.SEARCH_FOUCES) {
  //   //immutable对象的set方法，会结合之前immutable对象的值
  //   //和设置的值，返回一个全新的对象
  //   return state.set("focused", true);
  // }
  // if (action.type === constans.SEARCH_BLUE) {
  //   return state.set("focused", false);
  // }
  // if (action.type === constants.CHANGE_LIST) {
  //   console.log('action====',action.data);

  //   return state.set("list", action.data);
  // }

  // return state;
};
//'//eslint-disable-next-line' 作用是注释或者删除掉 eslint的规则
