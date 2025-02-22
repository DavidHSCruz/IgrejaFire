interface InputProps {
    className?: string
    placeholder?: string
    pattern?: string
    value?: string
    minLength?: number
    maxLength?: number
    required?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    name?: 'nome' | 'email' | 'telefone' | 'nascimento' | 'mensagem'
    type: 'text' | 'number' | 'submit' | 'tel' | 'email' | 'date'
}

export const Input = ({className = '', ...props}: InputProps) => {
  return (
    <input className={`p-2 ${className}`} {...props} />
  )
}
