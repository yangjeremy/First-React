import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render () {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author} date={comment.date}>
                  {comment.text}
                </Comment>
            );
        })
        return (
            <div>
                
                {/* <Comment author="abc" date="2018.3.3">天气不错啊</Comment>
                <Comment author="abc" date="2018.3.3">我们出去玩吧</Comment>
                <Comment author="abc" date="2018.3.3">你好明天</Comment> */}
                 {commentNodes}
            </div>
        );
    }
}



export { CommentList as default };



//this.children就是指评论的内容    这是第六节的内容