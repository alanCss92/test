import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 626px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
  margin-left:50px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  /* 溢出隐藏 */
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;

export const RecommendInfo = styled.div`
  margin-top: 30px;
  padding-bottom: 4px;
  min-height: 228px;
`;
export const RecommendItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #333;
  background-color: transparent;
  .pic{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
}
  }
`;
