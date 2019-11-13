import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { connect } from 'react-redux'
import { Content, List, ListItem, Button, Text, Item, Label, Input } from 'native-base'

import ModalHeader from './ModalHeader'
import { db } from '../../firebase'

const NewCouncilDiscussion = props => {

    const [councils, setCouncils] = useState([])
    const [topic, setTopic] = useState('')

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

            <List>
                {councils.length > 0 && councils.map((council, id) => (
                    <ListItem key={id * Math.random()}>
                        <Button transparent onPress={() => props.setShowModal(false)}>
                            <Text>{council.id}</Text>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Content>
    </Modal>

}

export default NewCouncilDiscussion
