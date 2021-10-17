import React from "react";
import styled from "styled-components"

const Section = styled.section`
line-height: 0.01;
    display: flex;
    font-weight: bold;
`;
interface LikesProps {
    likes: Array<string>
}
const LikesSection: React.FC<LikesProps> = (props) => {
    return (
        <Section>
            <p>{props.likes.length} likes</p>
        </Section>
    )
}

export default LikesSection
