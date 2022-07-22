import React, { useEffect, useState } from 'react'
import { Message } from 'semantic-ui-react'

const MessageComponent = (props) => {
  const [messageType, setMessageType] = useState({ success: false, error: false, warning: false })
  const { type, header, content } = props

  useEffect(() => {
    setMessageType((messageType[type] = true))
  }, [])

  return (
    <Message
      success={messageType.success}
      error={messageType.error}
      warning={messageType.warning}
      header={header}
      content={content}
    />
  )
}

export default MessageComponent
