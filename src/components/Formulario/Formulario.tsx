import { useState } from "react"
import { Input } from "../Input/Input"
// import axios from "axios"

interface FormularioProps {
  type: 'contato' | 'inscricao'
  className?: string
}

export const Formulario = ({type, className}: FormularioProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nascimento: "",
  })

  const [telefone, setTelefone] = useState<string>("")
  const [nascimento, setNascimento] = useState<string>("")

  function reescreveTelefone(e: React.ChangeEvent<HTMLInputElement>) {
    let data = e.target.value.replace(/[^\d]/g, '')

    if (data.length == 1) {
        data = data.replace(/(\d{1})/, '($1_) ')
      } else if (data.length == 2) {
        data = data.replace(/(\d{2})/, '($1) ')
      } else if (data.length <= 7) {
        data = data.replace(/(\d{2})(\d{1,5})/, '($1) $2-')
      } else {
        data = data.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3')
      }

      setTelefone(data)
      handleChange(e)
}

function reescreveNascimento(e: React.ChangeEvent<HTMLInputElement>) {
  let data = e.target.value.replace(/[^\d]/g, '')

  if (data.length <= 3) {
      data = data.replace(/(\d{1,2})/, '$1/ ')
    } else if (data.length <= 6) {
      data = data.replace(/(\d{2})(\d{1,2})/, '$1/$2/')
    } else {
      data = data.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3')
    }

    setNascimento(data)
    handleChange(e)
}

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const telefone = e.target.value.replace(/[ ()-]/g, '')
    const nascimento = e.target.value.replace(/[/]/g, '-')
    let modificado

    if (e.target.name === 'telefone') {
      modificado = telefone
    } else if (e.target.name === 'data de nascimento') {
      modificado = nascimento
    }else {
      modificado = e.target.value
    }

    setFormData({
      ...formData, 
      [e.target.name]: modificado
    })
  }
  
  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault()

  //   try {
  //     const response = await axios.post("http://localhost:5000/membros", formData);
  //     console.log("Membro criado com sucesso:", response.data)
  //     alert("Membro cadastrado!")
  //   } catch (error: unknown) {
  //     let errorMessage = 'Erro desconhecido'
  //     if (axios.isAxiosError(error)) {
  //       errorMessage = error.response?.data || error.message
  //     }
  //     console.error("Erro ao cadastrar membro:", error)
  //     alert("Erro ao cadastrar membro, " + errorMessage)
  //   }
  // }

  function handleSubmitWhatsapp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const tel = '5541999497870'
    const mensagem = `Olá, meu nome é ${formData.nome} e gostaria de fazer parte da Igreja FIRE. Meu telefone é ${formData.telefone} e minha data de nascimento é ${formData.nascimento}.`
    const url = `https://api.whatsapp.com/send?phone=${tel}&text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank')
  }

  switch (type) {
    case 'inscricao':
      return (
        <form onSubmit={handleSubmitWhatsapp} className={`${className} grid grid-cols-2 gap-6 my-12`}>
          <Input 
            type="text" 
            className="col-span-2" 
            name="nome" 
            placeholder="Insira seu nome completo..."
            minLength={6} 
            onChange={handleChange}
            value={formData.nome}
            required 
          />
          <Input 
            type="email" 
            className="col-span-2" 
            name="email" 
            placeholder="Seu email..." 
            minLength={10} 
            onChange={handleChange}
            value={formData.email}
            required
          />
          <Input 
            type="tel" 
            className="col-span-2 md:col-span-1" 
            name="telefone" 
            placeholder="(41)..." 
            pattern="^\(\d{2}\)\s\d{4,5}-\d{4}$"
            maxLength={15}
            onChange={reescreveTelefone}
            value={telefone}
            required 
          />
          <Input 
            type="text" 
            className="col-span-2 md:col-span-1"
            name="data de nascimento"
            placeholder="00/00/0000"
            pattern="^(0[1-9]|[12]\d|3[01])/(0[1-9]|1[0-2])/\d{4}$"
            maxLength={10}
            onChange={reescreveNascimento}
            value={nascimento}
            required 
          />
          <Input 
            type="submit" 
            className="text-primary opacity-90 col-span-2 justify-self-center" 
            value="Entre em contato"
          />
        </form>
      )
  }
  
}
