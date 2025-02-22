import { useState } from "react";
import { Input } from "../Input/Input"
import axios from "axios";

interface FormularioProps {
  type: 'contato' | 'inscricao'
  className?: string
}

export const Formulario = ({type, className}: FormularioProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nascimento: "",
    telefone: "",
  })
  const [telefone, setTelefone] = useState("")

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.replace(/[ ()-]/g, '') })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://localhost:5000/membros", formData);
      console.log("Membro criado com sucesso:", response.data);
      alert("Membro cadastrado!");
    } catch (error) {
      console.error("Erro ao cadastrar membro:", error);
      alert("Erro ao cadastrar membro.")
    }
  }

  switch (type) {
    case 'inscricao':
      return (
        <form onSubmit={handleSubmit} className={`${className} grid grid-cols-8 gap-4 my-12`}>
          <Input type="text" className="col-span-8" name="nome" placeholder="Nome" minLength={3} onChange={handleChange} required />
          <Input type="email" className="col-span-4" name="email" placeholder="Email" minLength={10} onChange={handleChange} required />
          <Input 
            type="tel" 
            className="col-span-2" 
            name="telefone" 
            placeholder="Telefone" 
            minLength={10} 
            maxLength={15} 
            pattern="\(?\d{2}\)?\d{5}\-?\d{4}" 
            onChange={reescreveTelefone} 
            value={telefone} 
            required 
          />
          <Input type="date" className="col-span-2" name="nascimento" minLength={3} onChange={handleChange} required />
          <textarea className="col-span-8 resize-none h-24 p-2" name="digite sua mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
          <Input type="submit" className="text-primary opacity-90 col-span-8 cursor-pointer w-1/3 justify-self-center" value="Fazer inscrição" />
        </form>
      )
  }
  
}
