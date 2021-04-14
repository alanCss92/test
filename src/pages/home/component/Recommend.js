import React, { Component } from "react";
import { RecommendInfo, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendInfo>
        {list.map((item) => {
          return (
            <RecommendItem key={item.get('id')}>
              <img className="pic" src={item.get("imgUrl")} alt=""></img>
            </RecommendItem>
          );
        })}
      </RecommendInfo>
      // <RecommendInfo>
      //     <RecommendItem>
      //         <img className='pic' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.cri.cn%2FM00%2F02%2FE8%2FCqgNOlmHztWAfjm3AAAAAAAAAAA896.980x250.jpg&refer=http%3A%2F%2Fp2.cri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620293360&t=986603c9e90140c4ad36a99d2e4e8006' alt=''></img>
      //     </RecommendItem>
      // </RecommendInfo>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "recommedList"]),
});
export default connect(mapState)(Recommend);
