import { FC } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react'

import {
    Calendar,
    CalendarBody,
    CalendarHeader,
    CalendarGrid,
    Appointment,
    useCalendar,
  } from 'react-hook-calendar';


  const appointments = [
    { start: new Date(2021, 3, 21, 12, 0, 0), end: new Date(2021, 3, 21, 14, 30, 0), title: 'Ap. 1' },
    { start: new Date(2021, 3, 25, 10, 0, 0), end: new Date(2021, 3, 25, 17, 15, 0), title: 'Ap. 2' },
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
    backgroundColor='red.100'
    h='100%'
    w='100%'
    >
    <Calendar
      timeStart="8:00"
      timeEnd="20:00"
    >
      {/*<TodayButton />*/}
      <CalendarHeader style={{display: 'flex', flex:'1', alignItems:'center'}}>
          {({date}) => <HeaderCell isActive={isToday(date)} date={date}/>}
      </CalendarHeader>
      <CalendarBody style={{ display: 'flex', flex:'5', backgroundColor: 'yellow'}}>
        <CalendarGrid length = '30 min' />
        {appointments.map(appointment => (
          <Appointment
            start={appointment.start}
            end={appointment.end}
          >
              <AppointmentCard title={appointment.title} />
          </Appointment>
        ))}
      </CalendarBody>
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
        w='150px'
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
        w='150px'
        >
            <Text>
                {title}
            </Text>
        </Center>
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