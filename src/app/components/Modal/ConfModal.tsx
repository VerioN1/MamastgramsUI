import React from 'react'
import { Modal, Button, Header, Icon } from 'semantic-ui-react'

export interface ModalProps {
    title: string;
    content: string;
    didApproved: React.Dispatch<React.SetStateAction<boolean>>;
}
const ConfModal = (props : ModalProps) => {
    const [open, setOpen] = React.useState(false)

    return (
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name='alarm' />
          {props.title}
        </Header>
        <Modal.Content>
          <p>
            {props.content}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => {setOpen(false); props.didApproved(false)}}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={() => {setOpen(false); props.didApproved(true)}}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
}

export default ConfModal
