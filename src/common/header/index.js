import { React, Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Buttons,
  SearchInfo,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper,
  SearchInfoItem,
  SearchInfoList,
} from "./style.js";

class Header extends Component {
  getListArea(){
    const{focused, list , page,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage,totalPage} = this.props;
    const newList = list.toJS();
    const pageList = [];
    for(let i = (page-1)*10; i<page*10;i++){
      if(newList[i]){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo  onMouseEnter={handleMouseEnter} onMouseLeave
        ={handleMouseLeave} >
          <SearchInfoTitle >
            搜索内容
            <SearchInfoSwitch onClick={() =>handleChangePage(page,totalPage,this.spinIcon)}>
              <i  ref={(icon) => {this.spinIcon = icon}} className="iconfont spin"> &#xe851; </i>
                换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList}
  
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    const {focused ,handleInputFocus,handleInputBlur,list} = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() =>handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe604;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Buttons className="writting">
            <i className="iconfont">&#xe667;</i>
            写文章
          </Buttons>
          <Buttons className="reg">注册</Buttons>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
 console.log(state.getIn(['header','mouseIn']));
  return {
    // focused: state.get('header').get('focused'),
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header",'list']),
    page: state.getIn(["header",'page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(["header","totalPage"]),
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list);
      (list.size ===0) &&  dispatch(actionCreators.getList());
      // if(list.size === 0){
      //   dispatch(actionCreators.getList())
      // }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      console.log("进来");
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      console.log("离开");
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin){
      console.log('换一批',page,totalPage);
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      console.log(originAngle);
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360)+'deg)'
      
      if(page < totalPage){
        dispatch(actionCreators.changePage(page +1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
      
      
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);
