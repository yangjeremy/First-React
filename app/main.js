import 'semantic-ui/semantic.min.css';
import React from "react";
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';


var comments = [
    {"author": "王皓", "date": "5分钟前", "":""},
    {}
]
ReactDOM.render(
    // <CommentBox data={comments} />,
    <CommentBox url="app/comments.json">,
    document.getElementById('app')
);


{/* data={comments}  把comments放在一组大括号里面 */}



