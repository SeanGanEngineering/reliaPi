import React from 'react';
import BreadCrumbs from '../../../components/breadcrumbs/BreadCrumbs';
import { LayoutWrapper, SectionWrapper } from './HeadModule.styled';
import Search from '../../../components/search/Search';
import { DateCalendar, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import EventCard from '../../../components/card/EventCard';

const HeadModule = () => {
  const getFormattedDate = (): string => {
    const today: Date = new Date();
    const year: number = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day: string | number = today.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    const formattedDate: string = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <LayoutWrapper>      
      <BreadCrumbs path={["home", "profile", "charts", "temperature"]}/>
      <h1>ReliaPi</h1>
      <Search />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
        <DateCalendar defaultValue={dayjs(getFormattedDate())}/>
      </LocalizationProvider>
      <SectionWrapper>
      <EventCard />
      <EventCard />
      </SectionWrapper>

    </LayoutWrapper>
  );
};

export default HeadModule;