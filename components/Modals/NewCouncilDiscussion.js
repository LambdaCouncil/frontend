import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'
import { Content, List, ListItem, Button, Text, Item, Label, Input, H3 } from 'native-base'

import { setCurrentChannel } from '../../actions'
import ModalHeader from './ModalHeader'
import { db } from '../../firebase'

const NewCouncilDiscussion = props => {

    const [councils, setCouncils] = useState([])
    const [topic, setTopic] = useState('')
    const [council, setCouncil] = useState(null)

    useEffect(_ => {
        db('councils').get()
            .then(councils => setCouncils(councils.docs.map(council => ({ ...council.data(), id: council.id }))))
    }, [])


    return <Modal
        animationType='slide'
        transparent={false}
        visible={true}
    >
        <ModalHeader
            name='New Council Discussion'
            setShowModal={props.setShowModal}
        />
        <Content padder>

            <Item floatingLabel>
                <Label>Discussion Topic</Label>
                <Input onChangeText={e => setTopic(e)} />
            </Item>
            <Text pre para>Which council will be discussing this topic?</Text>
            <List>
                {councils.length > 0 && councils.map((council, id) => (
                    <ListItem key={id * Math.random()}>
                        <Button transparent onPress={() => setCouncil(council.id)}>
                            <Text>{council.id}</Text>
                        </Button>
                    </ListItem>
                ))}
            </List>
            <H3 submit active={topic.length && council !== null} onPress={() => {
                if (topic.length && council !== null) {
                    props.setCurrentChannel({
                        council,
                        id: topic,
                        direct: false,
                        brandNewChannel: true
                    })
                    db('councils').doc(council)
                        .collection(topic).add({
                            direct: false,
                            council
                        })
                    props.setShowModal(false)
                    props.history.push('/messages')
                }
            }}>Create</H3>
        </Content>
    </Modal>

}

export default connect(state => ({ ...state }), { setCurrentChannel })(withRouter(NewCouncilDiscussion))
