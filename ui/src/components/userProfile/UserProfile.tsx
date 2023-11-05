import { Typography } from '@mui/material';
import {
  DescriptionContainer,
  ProfileContainer,
  ScaledChip,
  StyledAvatar,
} from './UserProfile.styled';

const UserProfile = ({ name }: any) => {
  return (
    <ProfileContainer>
      <StyledAvatar>SG</StyledAvatar>
      <DescriptionContainer>
        <Typography>{name}</Typography>
        <ScaledChip label='Admin' />
      </DescriptionContainer>
    </ProfileContainer>
  );
};

export default UserProfile;
