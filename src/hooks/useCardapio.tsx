import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface CardapioProps {
    children: ReactNode
}

interface CardapioContextDataProps {
    setNavOption: Dispatch<SetStateAction<string>>,
    navOption: string
}

const CardapioContextData = createContext<CardapioContextDataProps>({} as CardapioContextDataProps)

export function CardapioProvider({ children }: CardapioProps) {
    const [navOption, setNavOption] = useState<string>('pizzas')

    return (
        <CardapioContextData.Provider value={{
            navOption,
            setNavOption,
        }}>
            {children}
        </CardapioContextData.Provider>
    )
}

export function useCardapio() {
    const context = useContext(CardapioContextData)

    return context
}