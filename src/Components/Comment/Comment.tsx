import styled from "styled-components"
import { IComment } from "../../types/CommetsTypes";

const OPLabel = styled.p`
font-weight: bold;
padding-right: 0.5rem;
margin: 0;
text-overflow: ellipsis;
    white-space: nowrap;
    text-align: initial;
    display: inline-block;
`;

const Comment : React.FC<IComment> = (props) => {
    return (
        <span className="text-layout" >
            <OPLabel>{props.OPName}</OPLabel>
            <span className="comment-text">{props.content}</span>
        </span>
    )
}

export default Comment
