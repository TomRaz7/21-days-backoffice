import { FC } from 'react';
import { Button, Flex, Table, Th, Tr, Text, Thead, Tbody, Badge, Link} from '@chakra-ui/react'

const workshops = [
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
    {
        id:'1',
        title:'atelier 1',
        adress:'6 cour des Lilas',
        city:'Paris',
        price:25,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'active'
    },
    {
        id:'2',
        title:'atelier 2',
        adress:'73 rue des bas Rogers',
        city:'Suresnes',
        price:30,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'pending'
    },
    {
        id:'3',
        title:'atelier 3',
        adress:'10 allée du ru à lin',
        city:'Marines',
        price:35,
        duration:7200,
        description:'sample workshop',
        nbMinParticipants:5,
        status:'disabled'
    },
]


const WorkshopsList: FC = () => {
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
                <Text color='gray.600'>Vos ateliers</Text>
                <Button backgroundColor='teal.300' color='white'>Créer un atelier</Button>
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
        </Flex>
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
            case 'disabled':
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