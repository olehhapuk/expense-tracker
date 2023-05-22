import { styled, Stack, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BalanceCardSection = styled('div')({
  position: 'relative',
  paddingTop: '34px',
  width: '100%',
  maxWidth: '360px',
  margin: '0 auto',
});

const SecondaryCard = styled('div')({
  width: '285px',
  height: '150px',
  backgroundColor: '#9A63FB',
  borderRadius: '24px',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

const BalanceCardRoot = styled('div')({
  position: 'relative',
  backgroundColor: '#2F3046',
  borderRadius: '24px',
  padding: '23px 30px',
});

const BalanceCardTitle = styled('h3')({
  fontWeight: 500,
  fontSize: '18px',
  color: '#FAFAFA',
  margin: 0,
  marginBottom: '16px',
});

const BalanceCardMoney = styled('p')({
  fontWeight: 700,
  fontSize: '30px',
  margin: 0,
  marginBottom: '44px',
  color: '#fff',
});

const BalanceCardNumber = styled('p')({
  fontWeight: 500,
  fontSize: '18px',
  color: '#A3A3A3',
  margin: 0,
});

const BalanceCardIcon = styled('div')({
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    display: 'block',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
  },
  '&::before': {
    backgroundColor: '#FF9F00',
    right: 0,
  },
  '&::after': {
    backgroundColor: 'rgba(255, 0, 21, 0.84)',
    right: 18,
  },
});

const MoreBtn = styled(IconButton)({
  position: 'absolute',
  top: '4px',
  right: '14px',
  color: '#fff',
});

function BalanceCard() {
  return (
    <BalanceCardSection>
      <SecondaryCard />

      <BalanceCardRoot>
        <BalanceCardTitle>Total Balance</BalanceCardTitle>
        <BalanceCardMoney>$76,22.00</BalanceCardMoney>
        <Stack direction="row" justifyContent="space-between">
          <BalanceCardNumber>2544 7545 3785 1023</BalanceCardNumber>
          <BalanceCardIcon />
        </Stack>
        <MoreBtn>
          <MoreHorizIcon />
        </MoreBtn>
      </BalanceCardRoot>
    </BalanceCardSection>
  );
}

export default BalanceCard;
