// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import './ChatUser.css'
import {chatUser} from '../../../store/actions/ActionUser'

class ChatUser extends Component {
    constructor(props){
        super(props)
        this.state={
            AdminID:this.props.AdminID,
            message:'',
            ID:this.props.ID
        }
        this.textMessage=this.textMessage.bind(this)
    }
textMessage(e){
    this.setState({
        message:e.target.value
    })
}
send=()=>{
    this.props.chatUser(this.state)
    this.setState({
        message:null
    })
}
render(){
    const { userInfo } =this. props;
    console.log("userInfo",userInfo)
    console.log("this. props",this. props.userInfo )
    return(
        <div>
        <header class="contact">
            <section class="contact--details">
                <h4 class="contact--details__name online">{userInfo.name}</h4>
                <p class="contact--details__tel">+44 9 555 66 777</p>
            </section>
        </header>
        <section class="messages">
            <section>
                <div class="msg msg--them">
                    <blockquote>He was a zombie?</blockquote>
                </div>
            </section>
            <section>
                <div class="msg msg--them">
                    <blockquote>Grrrr WHY YOU LITTLE...</blockquote>
                </div>
                
            </section>
        </section>
          {/* <div class="msg-send"><span class="fontawesome-play"/> */}
            <input type="text" placeholder="Your message" 
            onChange={this.textMessage}/>
          <i className="material-icons right" onClick={this.send}>send</i>
          {/* </div> */}
          
        </div>
        ) 
    }
}
const mapStateToProps = (state,ownProps) => {
    // console.log("STATE----",state)
    // console.log("Admin ID",state.firebase.auth.uid)
    console.log("ID",ownProps)
    const allChat= state.firestore;
    const adminID=state.firebase.auth.uid;
    const id= ownProps.match.params.id;
    const userInfo= state.firestore.data.user;
    const userInformation= userInfo ? userInfo[id] :null
    return{
        userInfo:userInformation,
        ID:id,
        AdminID:adminID,
        AllChat:allChat
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        chatUser: (message) =>dispatch(chatUser(message))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                    {collection: "user"},
                    // {collection: "messages"},
                ])
                )(ChatUser)


// export default ChatUser