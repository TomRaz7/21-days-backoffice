import { FC } from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    HStack,
    VStack
  } from '@chakra-ui/react'

import FormInput from './FormInput';
import WorkshopAdressInput from './WorkshopAdressInput';
import WorkshopTimeSlotInput from './WorkshopTimeSlotInput';
import IWorkshopSlot from '../../interfaces/IWorkshopSlot';

interface WorkshopModalFormProps {
    isVisible: boolean,
    handleClose():void
}

const WorkshopModalForm: FC<WorkshopModalFormProps> = ({isVisible, handleClose}: WorkshopModalFormProps) => {

    const handleWorkshopSlots = (slots:IWorkshopSlot[]) => {
        //console.log("Slots récupérés dans la modale du form");
        //console.log(slots);
    }

    return(
    <Modal onClose={handleClose} size='full' isOpen={isVisible}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader color='gray.600'>Créer un nouvel atelier</ModalHeader>
            <ModalCloseButton />
            <ModalBody backgroundColor='white'>
                <HStack spacing={4}>
                    <VStack spacing={4}>
                        <FormInput placeholder="Nom *" associatedField='title' type='text'/>
                        <FormInput placeholder="Prix *" associatedField='price' type='numeric'/>
                        <WorkshopAdressInput placeholder="Adresse *"/>
                        <FormInput placeholder="Minimum de participants " associatedField='nbMinParticipants' type='numeric'/>
                    </VStack>
                    <WorkshopTimeSlotInput placeholder='Crénaux et disponibilités *' handleWorkshopTimeslots={handleWorkshopSlots}/>
                </HStack>
            </ModalBody>
            <ModalFooter>
            <HStack spacing={2}>
                <Button backgroundColor="teal.300" color="white" onClick={handleClose}>Valider</Button>
                <Button onClick={handleClose} color='gray.600'>Annuler</Button>
            </HStack>
            </ModalFooter>
        </ModalContent>
    </Modal>
    );
}

export default WorkshopModalForm;