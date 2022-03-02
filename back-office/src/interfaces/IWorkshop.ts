interface IWorkshop {
    id: string,
    title: string,
    adress: string,
    picture: string | null,
    city: string
    price: number
    duration: number
    nbMinParticipants: number
    status: string 
}

export default IWorkshop;