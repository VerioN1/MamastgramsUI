import { Dimmer, Loader } from 'semantic-ui-react'

const FullScreenLoader = () => {
    return (
        <div className="main-layout">
               <Dimmer active>
        <Loader content='Loading' inline='centered' size="massive" />
      </Dimmer>
        </div>
    )
}

export default FullScreenLoader
