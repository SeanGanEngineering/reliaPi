import { Typography } from '@mui/material';
import { ActionButton, CardActionWrapper, CardContentWrapper, StyledCard } from './TestCard.styled';
import { useNavigate } from 'react-router-dom';

interface TestCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  handleClose: () => void;
}
const TestCard = ({title, description, icon, buttonText, handleClose}: TestCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${title.toLowerCase()}`)
    handleClose();
  }

  return (
    <StyledCard>
        <div style={{display: 'flex', width: '100%', alignItems:'center', justifyContent: 'center'}}>
          {icon}
        </div>
      <CardContentWrapper>
        <div>
        <Typography align='center' gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography align='center' variant="body2" color="text.secondary">
          {description}
        </Typography>
        </div>
        <CardActionWrapper>
        <ActionButton variant="contained" onClick={() => handleNavigate()}>{buttonText}</ActionButton>
      </CardActionWrapper>
      </CardContentWrapper>
    </StyledCard>
  );
};

export default TestCard;