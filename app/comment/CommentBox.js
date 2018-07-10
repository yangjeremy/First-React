import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
import $ from 'jquery';


class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.getComments();
        setInterval(() => {
            this.getComments()     
        }, 5000);     //  每隔5000ms就执行一次，重新发出请求
    }

    handleCommentSubmit(comment) {
     
      let comments = this.state.data,  //得到的评论的数据
          newComments = comments.concat(comment);  //comment就是用户新提交的评论
                
      this.setState({data: newComments});
      console.log(comment);
    }                     //把新增加的评论上交给commentBox，即他的爸爸

    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache:false,
            success: comments => {
                this.setState({data: comments});
            },
            error: (xhr, status,error) => {
                console.log(error)
            }
        });
    }
    render() {
        return {
            <div className="ui comments">
              <h1>评论</h1>
              <div className="ui divider"></div>

              <CommentList data={this.state.data} />
              <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />    //把数据传递给爸爸
            </div>
        }
    }
}


export { CommentBox as default };


//以上是第3节component的内容

//websocket,可以用来和服务端保持沟通，这样服务端发生变化的时候，就会发出一个通知，这样我们就能执行一下setState
//去设置组件里面的状态,让他重新显示一下，现在我们设置一下每隔5s钟向服务端发出一次请求


//规律是： 只要你在事件的方法里面用到this，html标签一律给我绑定bind(this)