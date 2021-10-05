import React, { createContext } from 'react'
import bitwhysAvatar from '../assets/images/bitwhys-letter-logo.png'

export const currentUser = {
  user: {
    id: 'f35aa0c5-2a8b-4de4-b6ca-6f5fc9752161',
    userName: 'bitwhys',
    avatar: bitwhysAvatar,
    loggedIn: true,
    projects: [
      {
        name: `Who's Hiring FYI`,
      },
    ],
  },
}

const CurrentUserContext = createContext(null)

export default CurrentUserContext
