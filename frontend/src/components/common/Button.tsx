import { CommandBarButton, DefaultButton, IButtonProps } from '@fluentui/react'

import styles from './Button.module.css'
import { Conversation } from '../../api'

export interface ButtonProps extends IButtonProps {
  onClick: () => void
  text: string | undefined
}

export const ShareButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <CommandBarButton
      className={styles.shareButtonRoot}
      iconProps={{ iconName: 'Share' }}
      onClick={onClick}
      text={text}

    />
  )
}

export interface WizardProps {
  conversationId?: string
  text?: string
  onSend123: (id?: string, currentChat?: Conversation | null | undefined) => void
  currentChat: Conversation | null | undefined
}

export const WizardButton: React.FC<WizardProps> = ({ onSend123, text, conversationId, currentChat }: WizardProps) => {

  const sendQuestion = () => {
    onSend123(conversationId, currentChat)
  }

  return (
    <CommandBarButton
      className={styles.fixedPromptButtonRoot}
      onClick={sendQuestion}
      text={text}
      style={{
        fontWeight: 'center'
      }}
    />
  )
}

export const FixedPromptButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <CommandBarButton
      className={styles.fixedPromptButtonRoot}
      onClick={onClick}
      text={text}
      style={{
        fontWeight: 'center'
      }}
    />
  )
}

export const HistoryButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <DefaultButton
      className={styles.historyButtonRoot}
      text={text}
      iconProps={{ iconName: 'History' }}
      onClick={onClick}
    />
  )
}
