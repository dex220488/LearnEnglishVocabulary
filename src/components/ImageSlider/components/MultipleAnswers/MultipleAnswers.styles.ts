import { keyframes, styled } from '@mui/material';

const bounceAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  25% { transform: translateY(-10px); opacity: 1; }
  50% { transform: translateY(0) ; opacity: 1; }
  75% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
`;

const tiltAnimation = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  25% { transform: translateX(-5px); opacity: 1; }
  50% { transform: translateX(5px); opacity: 1; }
  75% { transform: translateX(-5px); opacity: 1; }
  80% { transform: translateX(0); } // Start hold
  90% { transform: translateX(0); } // Continue hold
  100% { transform: translateX(0); opacity: 0; } // Fade out
`;

const StyledImage = styled('img')(({ theme }) => ({
  width: '300px',
  height: 'auto',
}));

export const CongratulationStyledImage = styled(StyledImage)(({ theme }) => ({
  animation: `${bounceAnimation} 3s forwards`,
}));

export const TryAgainStyledImage = styled(StyledImage)(({ theme }) => ({
  animation: `${tiltAnimation} 3s forwards`,
}));

export const MultipleAnswersStyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '10px',
}));

export const MultipleAnswersContainerStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

export const StyledOption = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
  borderRadius: '5px',
  padding: '10px',
  width: '90%',
  backgroundColor: 'white',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const StyledSelectedOption = styled(StyledOption)(({ theme }) => ({
  backgroundColor: 'lightblue',
}));

export const StyledSuccessSelectedOption = styled(StyledOption)(
  ({ theme }) => ({
    backgroundColor: 'green',
  })
);
