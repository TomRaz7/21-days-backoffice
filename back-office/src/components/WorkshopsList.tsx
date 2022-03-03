import { FC, useState } from 'react';
import { Button, Flex, Table, Th, Tr, Text, Thead, Tbody, Badge, Link, Select} from '@chakra-ui/react'

import IWorkshop from '../interfaces/IWorkshop';
import WorkshopModalForm from './forms/WorkshopModalForm';

const statusOptions = ['active', 'disabled', 'pending'];

interface WorkshopsListProps {
    workshops: IWorkshop[]
}

const WorkshopsList: FC<WorkshopsListProps> = ({workshops}: WorkshopsListProps) => {

    const [workshopFormVisible, setWorkshopFormVisible] = useState<boolean>(false);

    const handleStatusFilter = () => {
        console.log('filter');
    }

    const handleCloseModal = ():void => {
        setWorkshopFormVisible(false);
    }

    return(
        <Flex
        flex={10}
        backgroundColor='white'
        boxShadow='base'
        borderRadius='lg'
        m={2}
        w='99%'
        p={5}
        direction='column'
        overflowY='auto'
        >
            <Flex
            direction='row'
            justify='space-between'
            align='center'
            >
                <Flex direction='row' align='center'>
                    <Text flex={2} color='gray.600'>Vos ateliers</Text>
                    <DropDownFilter options={statusOptions} placeholder='Status' onSelect={handleStatusFilter}/>
                </Flex>
                <Button 
                backgroundColor='teal.300' 
                color='white'
                onClick={() => {setWorkshopFormVisible(true)}}
                >Créer un atelier</Button>
            </Flex>
            <Table variant='simple' mt={4}>
                <Thead>
                    <Tr>
                        <Th><Text color='gray.400' >Titre</Text></Th>
                        <Th><Text color='gray.400'>Adresse</Text></Th>
                        <Th><Text color='gray.400'>Prix</Text></Th>
                        <Th><Text color='gray.400'>Statut</Text></Th>
                        <Th></Th>
                    </Tr>  
                </Thead>
                <Tbody>
                    {workshops.map((e, index) => {
                        return(
                            <TableRow
                            key={index.toString()}
                            title={e.title}
                            adress={e.adress}
                            city={e.city}
                            price={e.price}
                            status={e.status}
                            />
                        )
                    })}
                </Tbody>
            </Table>
            <WorkshopModalForm isVisible={workshopFormVisible} handleClose={handleCloseModal}/>
        </Flex>
    );
}

interface DropDownFilterProps {
    options: string[],
    onSelect: Function,
    placeholder: string
}

const DropDownFilter: FC<DropDownFilterProps> = ({options, onSelect, placeholder}: DropDownFilterProps) => {
    return(
        <Select 
        placeholder={placeholder}
        bg='teal.300'
        color='white'
        flex={2}
        >
            {options.map((e, index) => {
                return(
                    <option value={index}>{e}</option>
                )
            })}
        </Select>
    );
}

interface TableRowProps {
    key: string,
    title: string,
    adress: string,
    city: string,
    price: number,
    status: string,
}

const TableRow: FC<TableRowProps> = ({key,title,adress,city,price,status}: TableRowProps) => {

    const renderBadge = (status: string): JSX.Element => {
        switch(status){
            case 'active':
                return(
                    <Badge colorScheme='green' p={2} borderRadius='md' >Actif</Badge>
                );
            case 'disable':
                return(
                    <Badge colorScheme='red' p={2} borderRadius='md'>Désactivé</Badge>
                );
            case 'pending':
                return(
                    <Badge p={2} borderRadius='md'>En attente de publication</Badge>
                ); 
            default:
                return <></>
        }
    }

    return(
        <Tr>
            <Th><Text color='gray.600'>{title}</Text></Th>
            <Th>
                <Flex
                direction='column'
                >
                    <Text color='gray.600'>{adress}</Text>
                    <Text color='gray.400'>{city}</Text>
                </Flex>
            </Th>
            <Th>
                <Flex
                direction='column'
                >
                    <Text color='gray.600'>{price} €</Text>
                    <Text color='gray.400'>/ personne</Text>
                </Flex>
            </Th>
            <Th>{renderBadge(status)}</Th>
            <Th><Link>Edit</Link></Th>
        </Tr>
    );
}

export default WorkshopsList;