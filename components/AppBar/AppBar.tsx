import React, { useContext, useState } from 'react'
import { PlusIcon } from '@heroicons/react/solid'

import CurrentUserContext from '../../context'
import NewProjectModal from '../NewProjectModal'

type AppBarProps = {
  user?: {}
  projectName?: string
}

const AppBar = ({ projectName = '' }: AppBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const currentUser = useContext(CurrentUserContext)

  const handleCloseModal = () => setIsOpen(false)
  const handleOpenModal = () => setIsOpen(true)

  console.log(currentUser)
  return (
    <div className="py-5 border-b border-gray-200">
      <div className="container mx-auto sm:flex sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg leading-6 font-bold text-gray-900">
            Projects
          </h3>
          <p className="mt-2 text-sm text-gray-500 truncate"> {projectName}</p>
        </div>
        <div className="">
          <button
            onClick={handleOpenModal}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Project
          </button>
        </div>
      </div>
      <NewProjectModal open={isOpen} onClose={handleCloseModal} />
    </div>
  )
}
export default AppBar
