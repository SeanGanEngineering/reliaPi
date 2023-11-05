import { Avatar, Box, Chip } from '@mui/material';
import styled from 'styled-components';

export const ProfileContainer = styled(Box).attrs({
  sx: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
  },
})``;

export const StyledAvatar = styled(Avatar).attrs({
  sx: {},
})``;

export const DescriptionContainer = styled(Box).attrs({
  sx: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
})``;

export const ScaledChip = styled(Chip).attrs({
  sx: {
    alignSelf: 'start',
    scale: '0.9',
    background: '#FFCD71',
    color: 'black',
  },
})``;
