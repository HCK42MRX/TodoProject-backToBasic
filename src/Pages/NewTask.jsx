import React, { useCallback, useState } from 'react'
import InputField from '../Components/InputField'
import Button from '../Components/Button'
import TextAreaInput from '../Components/TextAreaInput'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { storeToLocalStorage } from '../utils/handleLocalStorage'

export default function NewTask () {
  const navigate = useNavigate()
  const maxLetterTitle = 20
  const maxLetterDescription = 30
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const updateTitle = useCallback(e => {
    setTitle(e.target.value)
  }, [title])

  const updateDescription = useCallback(e => {
    const currentValue = e.target.value
    setDescription(currentValue)
  }, [description])

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((title && title.length <= maxLetterTitle) && (description && description.length <= maxLetterDescription)) {
      const { error } = storeToLocalStorage(title, description)
      if (error) {
        alert(error)
        return
      }
      toast.success(`todo ${title} berhasil di tambahkan`, { position: 'top-right', id: 'success-store-new-data' })
      return navigate('/')
    }
    if (!title.length || !description.length) {
      toast.error('input tidak boleh kosong', { position: 'top-right', id: 'error-empty' })
    }
    if (title.length > maxLetterTitle || description.length > maxLetterDescription) {
      toast.error('input melebehi max letternya', { position: 'top-right', id: 'error-max-letter' })
    }
  }

  return (
    <>
      <div><Toaster/></div>
      <div className='flex flex-col gap-y-5 items-center justify-center h-fit'>
        <h1 className='text-3xl font-medium text-white'>New task</h1>
        <InputField value={title} onChange={updateTitle} className='h-8' placeholder='Masukan title todo' maxLetter={maxLetterTitle} />
        <TextAreaInput value={description} onChange={updateDescription} className='h-44' maxLetter={maxLetterDescription} placeholder='Masukan description todo' />
        <Button onClick={handleSubmit} />
      </div>
    </>
  )
}
