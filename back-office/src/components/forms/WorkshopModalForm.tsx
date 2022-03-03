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
    Text,
    HStack
  } from '@chakra-ui/react'

import FormInput from './FormInput';
import WorkshopAdressInput from './WorkshopAdressInput';
import WorkshopTimeSlotInput from './WorkshopTimeSlotInput';

interface WorkshopModalFormProps {
    isVisible: boolean,
    handleClose():void
}

const WorkshopModalForm: FC<WorkshopModalFormProps> = ({isVisible, handleClose}: WorkshopModalFormProps) => {


    const handleInput = () => {
        console.log('test')
    }

    return(
    <Modal onClose={handleClose} size='full' isOpen={isVisible}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader color='gray.600'>Créer un nouvel atelier</ModalHeader>
            <ModalCloseButton />
            <ModalBody backgroundColor='white'>
                <FormInput placeholder="Nom *" associatedField='title' type='text'/>
                <FormInput placeholder="Prix *" associatedField='price' type='numeric'/>
                <WorkshopAdressInput placeholder="Adresse *"/>
                <WorkshopTimeSlotInput placeholder='Crénaux et disponibilités *'/>
            <FormInput placeholder="Minimum de participants " associatedField='nbMinParticipants' type='numeric'/>
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