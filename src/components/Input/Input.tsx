import { useState } from "react"

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
  const tipoDeErro: (keyof ValidityState)[] = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'badInput',
    'customError'
  ]

  const mensagensDeErro = {
    nome: {
      valueMissing: "Nome é obrigatório.",
      tooShort: "Por favor, insira seu nome completo.",
    },
    email: {
      valueMissing: "Email é obrigatório.",
      typeMismatch: "Por favor, insira um email válido.",
      tooShort: "Por favor, insira um email válido.",
    },
    telefone: {
      valueMissing: "Telefone é obrigatório.",
      patternMismatch: "Por favor, insira um telefone válido.",
      tooShort: "Por favor, insira um telefone válido.",
    },
    nascimento: {
      valueMissing: "Data de nascimento é obrigatória.",
      patternMismatch: "Por favor, insira uma data de nascimento válida.",
    },
  }

  const [error, setError] = useState<string>("")

  function verificaInput(e: React.FocusEvent<HTMLInputElement>) {
    let mensagem = ""
    e.target.setCustomValidity('')

    const fieldName = e.target.name as keyof typeof mensagensDeErro
    let hasError = false
    
    tipoDeErro.forEach(tipo => {
      if (e.target.validity[tipo as keyof ValidityState]) {
        mensagem = mensagensDeErro[fieldName][tipo as keyof typeof mensagensDeErro[typeof fieldName]]
        setError(`*${mensagem}`)
        hasError = true
      }
    })

    if (!hasError) {
      setError("")
    }
    
  }

  return (
    <div className={`${className}`}>
      <div className={`text-secondary ${props.type !== 'submit' && 'h-4'} relative`}>
        <p className="absolute bottom-0">{error}</p>
      </div>
      <input 
        className={`p-2 w-full ${props.type === 'submit' && 'cursor-pointer'}`}
        {...props} 
        onInvalid={ (e) => {
          e.preventDefault()
          setError('*Obrigatório.')
        }} 
        onBlur={ e => verificaInput(e) }
      />
    </div>
  )
}
