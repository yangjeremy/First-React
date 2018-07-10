import React from 'react';


class CommentForm extends React.Component {

    handleSubmit(event) {
       event.preventDefault();  //去掉默认事件
       console.log('提交表单...');

       let author = this.refs.author.value;
             text = this.refs.text.value;    //由节点获得对应的值

           console.log(author, text);

           this.props.onCommentSubmit({author, text, date: '刚刚'});   //和commentBox的相对应
    }
    render () {
        return (
            <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>  {/**/}
               <div className="field">
                  <input type="text" placeholder="姓名" ref="author" />
               </div>
               <div className="field">
                  <textarea placeholder="评论" ref="text"></textarea>
               </div>
               <button className="ui blue button" type="submit">
                 添加评论
               </button>
            </form>
        );
    }
}



export { CommentForm as default };




//知识点： refs (获得DOM元素)

// 如果在handleSubmit里面这样写进去：
// let author = this.refs.author.value
// text = this.refs.text.value      //由节点获得对应的值

// console.log(author, text)


// 而标签里面写<form className="ui reply form" onSubmit={this.handleSubmit}>

// 它会报找不到this的错误

// 所以用this.handleSubmit.bind(this)

//将新增加的评论上交给commentBox，即他的爸爸