import React from 'react'
import avatarPicture from '../../../assets/avatar.png';

interface AvatarProps{
    picture?: string,
}
const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <img className="ui avatar image" alt="avatar" src={props.picture ?? avatarPicture} />
    )
}

export default Avatar
