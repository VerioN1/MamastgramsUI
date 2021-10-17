import Comment from '../../Comment/Comment'

interface PublisherProps {
    OPName: string,
    OPCaption: string,
}

const PublisherSection : React.FC<PublisherProps> = (props) => {
    return (
        <div style={{textAlign: 'left'}}>
            <Comment OPName={props.OPName} content={props.OPCaption} likes={[]} id="1"/>
        </div>
    )
}

export default PublisherSection
