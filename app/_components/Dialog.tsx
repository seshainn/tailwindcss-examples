import { useEffect, useCallback, useRef } from 'react'

const Dialog = ({
  onClose,
  children,
}: {
  onClose: () => void
  children: React.ReactNode
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  const handleEscapeKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscapeKeyPress)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [handleOutsideClick, handleEscapeKeyPress])

  return (
    <div className='fixed flex items-center justify-center z-50 h-screen'>
      <div
        ref={dialogRef}
        className='w-1/2 bg-blue-300 p-6 rounded-lg shadow-md max-h-[500px] overflow-auto relative'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='absolute top-3 right-3 cursor-pointer lucide lucide-x'
          onClick={handleClose}
        >
          <path d='M18 6 6 18' />
          <path d='m6 6 12 12' />
        </svg>
        {children}
      </div>
    </div>
  )
}

export default Dialog
