import { Typography } from '@mui/material';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  gap: 10px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LogoText = styled(Typography).attrs({
  sx: {
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: 1,
  },
})``;
