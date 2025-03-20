import { useState } from "react"
import { IoAlertCircle } from "react-icons/io5"

interface InputProps {
    className?: string
    placeholder?: string
    pattern?: string
    data?: string
    minLength?: number
    maxLength?: number
    required?: boolean
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
    name?: 'nome' | 'email' | 'telefone' | 'data de nascimento' | undefined
    type: 'text' | 'number' | 'submit' | 'tel' | 'email' | 'date'
}

export const Input = ({ className = '', name, ...props }: InputProps) => {
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
    },
    'data de nascimento': {
      valueMissing: "Data de nascimento é obrigatória.",
      patternMismatch: "Por favor, insira uma data de nascimento válida.",
    },
  }

  const [error, setError] = useState<string>("")
  const [hiddenError, setHiddenError] = useState<boolean>(true)

  function verificaInput(e: React.FocusEvent<HTMLInputElement>) {
    let mensagem = ""
    e.target.setCustomValidity('')

    const fieldName = e.target.name as InputProps['name']
    if (!fieldName) return
    let hasError = false

    tipoDeErro.forEach(tipo => {
      if (e.target.validity[tipo] && tipo in mensagensDeErro[fieldName]) {
        mensagem = mensagensDeErro[fieldName][tipo as keyof typeof mensagensDeErro[typeof fieldName]] || ""
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
      <div className={`
        relative flex place-items-center
        ${props.type !== 'submit' && 'bg-primary'}
        ${error && 'border-secondary border-2 border-opacity-50'}
      `}
      >
        <input
          id={name}
          name={name}
          className={`peer
                      w-full placeholder-primary p-2 bg-transparent
                      focus:placeholder-quaternary focus:placeholder-opacity-50 focus:outline-none focus:ring-0
                      ${props.type === 'submit' ? 'cursor-pointer' : ''}
                    `}
          onBlur={verificaInput}
          onInvalid={(e) => {
            e.preventDefault()
            setError('*Campo obrigatório.')
          }}
  
          {...props}
        />
        {name && 
          <label
            htmlFor={name}
            className={`
              absolute left-2 transition-all duration-200 cursor-text
              peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
              peer-focus:-top-5 peer-focus:text-xs peer-focus:opacity-100
              ${props.value ? '-top-5 text-xs' : 'top-2'}
              ${props.value && !error ? 'text-primary opacity-100' : 'text-quaternary opacity-50'}
              ${error ? 'text-secondary peer-invalid:opacity-100' : 'peer-focus:text-primary'}
            `}
          >
            {name}
          </label>
        }
        {error &&
          <div>
            <IoAlertCircle 
              className="w-6 h-6 text-secondary mr-2 cursor-pointer"
              onClick={() => setHiddenError(!hiddenError)}
            />
          </div>
        }
      </div>
      {error &&
        <>
          {!hiddenError &&
            <div className="left-full w-full z-50 top-0 bg-secondary p-2">
              <p className="text-sm text-primary">{error}</p>
            </div>
          }
        </>
      }
    </div>
  )
}