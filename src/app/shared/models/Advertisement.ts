export interface Advertisement {
    id: string,
    user_id: string,
    title: string,
    price: string,
    valuta: string,
    size: string,
    location: string,
    contacts: {
        email: string,
        phonenumber: string
    },
    index_image: string
}