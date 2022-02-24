import { FC } from 'react';
import { Box, Center, Flex, Text, Grid as ChakraGrid, GridItem } from '@chakra-ui/react'

import {
    Calendar,
    CalendarBody,
    CalendarHeader,
    CalendarGrid,
    Appointment,
    useCalendar,
  } from 'react-hook-calendar';


  const appointments = [
    { start: new Date(2022, 2, 21, 12, 0, 0), end: new Date(2022, 2, 21, 14, 30, 0), title: 'Ap. 1' },
    { start: new Date(2022, 2, 23, 12, 0, 0), end: new Date(2022, 2, 23, 14, 30, 0), title: 'Ap. 2' },
  ];

const WorkshopsCalendar: FC = () => {

    const isToday = (date: Date): boolean => {
        const today = new Date()
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    return(
    <Flex
    direction='column'
    h='100%'
    w='100%'
    overflowY='auto'
    >
    <Calendar
      timeStart="8:00"
      timeEnd="20:00"
    >
      {/*<TodayButton />*/}
      <CalendarHeader style={{display: 'flex', flex:'1', marginLeft:80,  alignItems:'center', justifyContent:'space-around'}}>
          {({date}) => <HeaderCell isActive={isToday(date)} date={date}/>}
      </CalendarHeader>
      <Flex direction="row" flexGrow={2}>
            <Box flexShrink={0} w="20">
              <TimeLegend />
            </Box>
            <Box h="100%" flexGrow={1} as={CalendarBody} backgroundColor='white'>
              <Box
                as={CalendarGrid}
                length="30 min"
                borderTopWidth="1px"
                borderLeftWidth="1px"
                borderColor="gray.300"
              />
              {appointments.map(appointment => (
                <Appointment {...appointment} />
              ))}
            </Box>
          </Flex>
    </Calendar>
    </Flex>
    );
}  

interface HeaderCellProps {
    isActive: boolean
    date: Date
}

const HeaderCell: FC<HeaderCellProps> = ({isActive, date}: HeaderCellProps) => {
    return(
        <Center
        flexDirection='column'
        boxShadow='base'
        backgroundColor={isActive ? 'teal.300': 'white'}
        p={4}
        borderRadius='lg'
        m={2}
        w='100px'
        >
            <Text 
            color={isActive ? 'white' : 'gray.600'}
            fontWeight={isActive ? 'semibold': 'medium'}
            >
                {date.getDate()}
            </Text>
            <Text 
            color={isActive ? 'white' : 'gray.600'}
            fontWeight={isActive ? 'semibold': 'medium'}
            >
                {Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(date)}
            </Text>
        </Center>
    );
}

interface AppointmentCardProps {
    title: string,
}

const AppointmentCard: FC<AppointmentCardProps> = ({title}: AppointmentCardProps) => {
    return(
        <Center
        flexDirection='column'
        boxShadow='base'
        p={4}
        borderRadius='lg'
        m={2}
        backgroundColor='yellow.100'
        >
            <Text>
                {title}
            </Text>
        </Center>
    );
}

function TimeLegend() {
    const { viewTimes } = useCalendar();
    const numHours = (viewTimes.end - viewTimes.start) / (60 * 60 * 1000);
    const startHour = viewTimes.start / (60 * 60 * 1000);
    return (
      <ChakraGrid width="100%" height="100%" templateRows={`repeat(${numHours}, 1fr)`}>
        {Array.apply(null, Array(numHours)).map((_, index) => (
          <GridItem
            rowStart={index * 1 + 1}
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            fontSize="0.8rem"
            color="gray.400"
            p="1"
            borderTopWidth="1px"
            borderColor="gray.300"
          >
            {index + startHour}:00
          </GridItem>
        ))}
      </ChakraGrid>
    );
  }

function TodayButton() {
    const { setDate } = useCalendar();
    return (
      <button className="rounded-md bg-blue-500 text-white" onClick={() => setDate(new Date())}>
        Today
      </button>
    );
  }

export default WorkshopsCalendar;