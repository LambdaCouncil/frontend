import React from "react"
import moment from "moment"
import { Text, Content, Container, Thumbnail } from 'native-base'



const Message = props => {

    return (
        <Content padder>
            {/*<Thumbnail src={user.avatar} />*/}
            {/*<Text as='a'>{props.message.user.name}</Text>*/}
            <Text>{props.message.content}</Text>
        </Content>
    );
};

export default Message;