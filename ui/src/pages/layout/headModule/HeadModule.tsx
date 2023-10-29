import BreadCrumbs from '../../../components/breadcrumbs/BreadCrumbs';
import { LayoutWrapper, LogoText, SectionWrapper } from './HeadModule.styled';
import Search from '../../../components/search/Search';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import EventCard from '../../../components/card/event/EventCard';
import logo from '../../../assets/images/logo.png';

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
      <BreadCrumbs path={['home', 'profile', 'charts', 'temperature']} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={logo}
          height={'50px'}
          width={'50px'}
          style={{ borderRadius: '10px' }}
        />
        <LogoText>SCOUT</LogoText>
      </div>

      <Search />
      <DateCalendar defaultValue={dayjs(getFormattedDate())} />
      <SectionWrapper>
        <EventCard />
        <EventCard />
      </SectionWrapper>
    </LayoutWrapper>
  );
};

export default HeadModule;
