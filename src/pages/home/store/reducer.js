import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/4236922-cfaf95c18ff9c67a.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "公告：暂停新用户注册功能和部分板块更新，全面清查平台违规内容",
      desc: `亲爱的简书用户：
      「简书」因个别用户上传作品违反《中华人民共和国网络安全法》《网络信息内容生态治理规定》等相关法律法规，平台审核不严，造成违法违...`,
      imgUrl: "https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF",
    },
    {
      id: 2,
      title: "超级权重助力守护者联盟推荐好文",
      desc: `
    前情提要：简书社区守护者徽章奖励公告[https://www.jianshu.com/p/09c5bf171574] 简书社区守护者在简书审核全...
  `,
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg",
    },
    {
      id: 3,
      title: "公告：暂停新用户注册功能和部分板块更新，全面清查平台违规内容",
      desc: `亲爱的简书用户：
    「简书」因个别用户上传作品违反《中华人民共和国网络安全法》《网络信息内容生态治理规定》等相关法律法规，平台审核不严，造成违法违...`,
      imgUrl: "https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF",
    },
    {
      id: 4,
      title: "超级权重助力守护者联盟推荐好文",
      desc: `
  前情提要：简书社区守护者徽章奖励公告[https://www.jianshu.com/p/09c5bf171574] 简书社区守护者在简书审核全...
`,
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg",
    },
    {
      id: 5,
      title: "公告：暂停新用户注册功能和部分板块更新，全面清查平台违规内容",
      desc: `亲爱的简书用户：
        「简书」因个别用户上传作品违反《中华人民共和国网络安全法》《网络信息内容生态治理规定》等相关法律法规，平台审核不严，造成违法违...`,
      imgUrl: "https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF",
    },
    {
      id: 6,
      title: "超级权重助力守护者联盟推荐好文",
      desc: `
      前情提要：简书社区守护者徽章奖励公告[https://www.jianshu.com/p/09c5bf171574] 简书社区守护者在简书审核全...
    `,
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3355464299,584008140&fm=26&gp=0.jpg",
    },
  ],
  recommedList: [
    {
      id: 1,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.cri.cn%2FM00%2F02%2FE8%2FCqgNOlmHztWAfjm3AAAAAAAAAAA896.980x250.jpg&refer=http%3A%2F%2Fp2.cri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620293360&t=986603c9e90140c4ad36a99d2e4e8006",
    },
    {
      id: 2,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.cri.cn%2FM00%2F02%2FE8%2FCqgNOlmHztWAfjm3AAAAAAAAAAA896.980x250.jpg&refer=http%3A%2F%2Fp2.cri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620293360&t=986603c9e90140c4ad36a99d2e4e8006",
    },
    {
      id: 3,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.cri.cn%2FM00%2F02%2FE8%2FCqgNOlmHztWAfjm3AAAAAAAAAAA896.980x250.jpg&refer=http%3A%2F%2Fp2.cri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620293360&t=986603c9e90140c4ad36a99d2e4e8006",
    },
    {
      id: 4,
      imgUrl:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.cri.cn%2FM00%2F02%2FE8%2FCqgNOlmHztWAfjm3AAAAAAAAAAA896.980x250.jpg&refer=http%3A%2F%2Fp2.cri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620293360&t=986603c9e90140c4ad36a99d2e4e8006",
    },
  ],
});
//eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//'//eslint-disable-next-line' 作用是注释或者删除掉 eslint的规则
