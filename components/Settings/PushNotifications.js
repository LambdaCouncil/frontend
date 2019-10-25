import React, { useState } from 'react'
import { Text, H1, ListItem, CheckBox, Body, Container, Content, View, Icon } from 'native-base'
import { withRouter } from 'react-router-native'


function PushNotifications(props) {

  const [checked, setChecked] = useState({
    all: false,
    agendas: false,
    private: false,
    group: false,
    assignments: false,
    files: false,
    account: false,
    donations: false
  })

  const allCheck = _ => {

    if (!checked.all) {
      setChecked({
        all: true,
        agendas: true,
        private: true,
        group: true,
        assignments: true,
        files: true,
        account: true,
        donations: true
      })
    } else {
      setChecked({
        all: false,
        agendas: false,
        private: false,
        group: false,
        assignments: false,
        files: false,
        account: false,
        donations: false
      })
    }

  }

  return (

    <View containerAllRoot>

      <H1>Push Notifications</H1>

      <Container>
        <Content>
          <ListItem>

            <CheckBox
              checked={checked.all}
              onPress={() => {
                setChecked({ all: !checked.all })
                allCheck()
              }}
            />
            <Body>
              <Text>All Activity</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.agendas}
              onPress={() => setChecked({ ...checked, agendas: !checked.agendas })}
            />
            <Body>
              <Text>Agendas</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.private}
              onPress={() => setChecked({ ...checked, private: !checked.private })}
            />
            <Body>
              <Text>Private Discussions</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.group}
              onPress={() => setChecked({ ...checked, group: !checked.group })}
            />
            <Body>
              <Text>Group Discussions</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.assignments}
              onPress={() => setChecked({ ...checked, assignments: !checked.assignments })}
            />
            <Body>
              <Text>Assignments</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.files}
              onPress={() => setChecked({ ...checked, files: !checked.files })}
            />
            <Body>
              <Text>Files</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.account}
              onPress={() => setChecked({ ...checked, account: !checked.account })}
            />
            <Body>
              <Text>Account</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.donations}
              onPress={() => setChecked({ ...checked, donations: !checked.donations })}
            />
            <Body>
              <Text>Donations</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
    </View>

  )
}


export default withRouter(PushNotifications)
