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
        district?: string
        city?: string
        state?: string
        cep?: string
        complement?: string
        reference?: string
    }

    agreedTerms?: boolean

    forms?: {
        skin?: string
        hair?: string
        productPreference?: string
    }

    plan?: {
        name?: string
        price?: number
        months?: number
    }

    paymentInfos?: {
        cardName?: string
        carNumber?: string
        cardCVC?: string
        expiresAt?: Date
    }
}