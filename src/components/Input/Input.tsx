interface InputProps {
    className?: string
    placeholder?: string
    pattern?: string
    value?: string
    minLength?: number
    maxLength?: number
    required?: boolean
    name?: 'nome' | 'email' | 'telefone' | 'mensagem'
    type: 'text' | 'number' | 'submit' | 'tel' | 'email'
}

export const Input = ({className = '', ...props}: InputProps) => {
  return (
    <input className={`p-2 ${className}`} {...props} />
  )
}
