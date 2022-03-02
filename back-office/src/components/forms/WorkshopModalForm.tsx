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
            <ModalHeader>Créer un nouvel atelier</ModalHeader>
            <ModalCloseButton />
            <ModalBody backgroundColor='white'>
            <FormInput placeholder="Nom de l'atelier" associatedField='title' type='text'/>
            <FormInput placeholder="Prix de l'atelier" associatedField='price' type='numeric'/>
            </ModalBody>
            <ModalFooter>
            <HStack spacing={2}>
                <Button backgroundColor="teal.300" color="white" onClick={handleClose}>Valider</Button>
                <Button onClick={handleClose}>Annuler</Button>
            </HStack>
            </ModalFooter>
        </ModalContent>
    </Modal>
    );
}

export default WorkshopModalForm;