interface CardProps {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={`${className} bg-zinc-800 rounded-2xl relative overflow-hidden`}>{children}</div>
}

