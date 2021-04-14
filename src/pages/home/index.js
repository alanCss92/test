import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight} from './style'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
class Home extends Component{
    render(){
        return (
            <HomeWrapper> 
                <HomeLeft>
                    <img className='banner-img' src='https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF' alt=''></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home