import React from 'react'
import { Tab } from 'semantic-ui-react'
import LikedPosts from './TabsComponents/LikedPosts'
import PersonalPosts from './TabsComponents/PersonalPosts'
import TaggedPosts from './TabsComponents/TaggedPosts'

const panes = [
  {
    menuItem: {
        id: "Posts",
        content: "POSTS",
        icon: "grid layout",
        key: "posts"
      },
    render: () => <Tab.Pane className="test1" attached={false}><PersonalPosts/></Tab.Pane>,
  },
  {
    menuItem:{
        id: "LIKED",
        content: 'LIKED POSTS',
        icon: "heart outline",
        key: "liked"
      },
    render: () => <Tab.Pane attached={false}><LikedPosts/></Tab.Pane>,
  },
  {
    menuItem: {
        id: "Saved",
        content: 'SAVED',
        icon: "bookmark outline",
        key: "saved"
      },
    render: () => <Tab.Pane attached={false}><TaggedPosts/></Tab.Pane>,
  },
]

const Tabs = () => (
  <Tab style={{width: "80vw"}} menu={{ secondary: true, pointing: true, style: {
    justifyContent: "center"
  }}} panes={panes} />
)

export default Tabs