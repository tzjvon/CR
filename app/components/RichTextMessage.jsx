import React, {PropTypes} from 'react'
import pureMixin from '../mixin/pureMixin.js'
import Immutable from 'immutable'
import MessageBox from './MessageBox.jsx'
import '../less/message.less'
 
class Message extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = pureMixin.bind(this);
    }
    
    render(){
        return (
            <MessageBox 
                info = {this.props.info}
                messageContent = {
                    <span>
                        <div className = 'message-richtext-image-container'>
                            <img src = 'http://ooo.0o0.ooo/2016/11/16/582c46b382ead.jpg'/>
                        </div>
                        <div className = 'message-richtext-text-container'>
                            <span className = 'message-richtext-title'>{this.props.content}</span>
                            <span className = 'message-richtext-tip'>点击查看</span>
                        </div>
                    </span>
                }
            />
            
        );
    }
}

export default Message;
