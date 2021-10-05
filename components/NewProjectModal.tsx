import { Fragment, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import app from '../lib/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import CurrentUserContext from '../context'

const NewProjectModal = ({ open, onClose: handleClose }) => {
  const [projectName, setProjectName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = event => {
    const {
      target: { value },
    } = event
    setProjectName(value)
  }
  // const user = useContext(CurrentUserContext)
  const handleCreate = async event => {
    event.preventDefault()
    // const db = firebaseApp.firestore()
    try {
      setIsLoading(true)
      const db = getFirestore(app)
      const docRef = await addDoc(collection(db, 'projects'), {
        name: projectName,
      })
      console.log('Document written with ID: ', docRef.id)
      setIsLoading(false)
      handleClose()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    // db.collection('projects')
    //   .add({ projectName })
    //   .then(async res => {
    //     console.log(res)
    //     // component logic comes here //
    //     handleClose()
    //     // toast.success('Project created Successfully')
    //   })
    //   .catch(err => {
    //     // toast.error('Oops!! Something went wrong')
    //     console.log('err', err)
    //   })
  }

  useEffect(() => {
    return () => setProjectName('')
  }, [open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Create new Project
                  </Dialog.Title>
                  <form className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        value={projectName}
                        onChange={handleInput}
                        type="text"
                        name="projectName"
                        id="projectName"
                        className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md"
                        placeholder="project name"
                      />
                    </div>
                    <button
                      onClick={handleCreate}
                      type="submit"
                      className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default NewProjectModal
