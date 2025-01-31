import { Input } from "../Input/Input"

interface FormularioProps {
  type: 'contato'
}

export const Formulario = ({type}: FormularioProps) => {
  switch (type) {
    case 'contato':
      return (
        <form className="grid grid-cols-2 gap-4 my-12">
          <Input className="col-span-2" type="text" name="nome" placeholder="Nome" minLength={3} required />
          <Input type="email" name="email" placeholder="Email" minLength={10} required />
          <Input type="tel" name="telefone" placeholder="Telefone" minLength={10} maxLength={15} pattern="\(?\d{2}\)?\d{5}\-?\d{4}" required />
          <textarea className="col-span-2 resize-none h-24 p-2" name="digite sua mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
          <Input className="text-zinc-300 col-span-2 cursor-pointer w-1/3 justify-self-center" type="submit" value="Entre em contato" />
        </form>
      )
  }
  
}
