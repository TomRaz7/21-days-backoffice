import ITimeSlot from './ITimeSlot';

interface IWorkshopSlot {//ajouter un dayIndex
    day: string,
    dayIndex: number,
    nbSlot: number,
    assoxiatedDaySlots?: ITimeSlot[]
}

export default IWorkshopSlot;