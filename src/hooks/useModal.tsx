import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface ModalProps {
    children: ReactNode
}

interface ModalContextDataProps {
    setNameImg: Dispatch<SetStateAction<string>>,
    nameImg: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}

const ModalContextData = createContext<ModalContextDataProps>({} as ModalContextDataProps)

export function ModalProvider({ children }: ModalProps) {
    const [nameImg, setNameImg] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <ModalContextData.Provider value={{
            setNameImg,
            nameImg,
            setIsOpen,
            isOpen
        }}>
            {children}
        </ModalContextData.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContextData)

    return context
}