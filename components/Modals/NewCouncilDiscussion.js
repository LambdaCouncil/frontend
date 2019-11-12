import React, { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { Content } from 'native-base'

import { db } from '../../firebase'

const NewCouncilDiscussion = props => {

    const [councils, setCouncils] = useState([])

    useEffect(_ => {
        db('councils').get()
            .then(council => console.log(council))
    }, [])

    return <Modal
        animationType='slide'
        transparent={false}
        visible={true}
    >
        <Content padder>

        </Content>
    </Modal>

}

export default NewCouncilDiscussion
