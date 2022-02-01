export interface SignatureModel{
    email?: string
    cpf?: string
    name?: string
    lastName?: string
    password?: string
    birthDate?: Date
    phone?: string

    address?: {
        street?: string
        number?:string
        neighbourhood?: string
        city?: string
        state?: string
        cep?: string
        complements?: string
        references?: string
    }

    agreedTerms?: boolean

    forms?: {
        skin?: string
        hair?: string
        productPreference?: string
    }

    plan?: {
        name?: string
        value?: number
        months?: number
        boxQuantity?: number
    }

    paymentInfos?: {
        cardName?: string
        carNumber?: string
        cardCVC?: string
        expiresAt?: Date
    }
}