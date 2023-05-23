import { styled, Stack } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import { Card } from '../../types/Card';
import { formatNumberToCurrency } from '../../utils/format';

const CardRoot = styled('div')(({ color }) => ({
  backgroundColor: color,
  borderRadius: '6px',
  padding: '24px 22px',
  color: '#fff',
  position: 'relative',
  height: '190px',
  flexGrow: 1,
}));

const Title = styled('h3')({
  fontSize: '16px',
  fontWeight: '500',
  margin: 0,
  marginBottom: '14px',
});

const Amount = styled('p')({
  fontSize: '28px',
  fontWeight: '700',
  margin: 0,
});

const Footer = styled(Stack)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#FAFAFA',
  color: '#000',
  borderRadius: '10px 10px 0px 0px',
  padding: '12px 20px',
});

const Account = styled('h4')({
  margin: 0,
  fontSize: '14px',
  fontWeight: 400,
});

const CardNumber = styled('p')({
  margin: 0,
  fontSize: '12px',
  fontWeight: 300,
  color: '#A3A3A3',
});

interface BalanceCardSmallProps {
  card: Card;
  account: string;
  color: string;
}

function BalanceCardSmall({ card, account, color }: BalanceCardSmallProps) {
  return (
    <CardRoot color={color}>
      <Title>Total Balance</Title>
      <Amount>{formatNumberToCurrency(card.amount)}</Amount>

      <Footer direction="row" gap="8px">
        <WalletIcon
          htmlColor={color}
          opacity={0.5}
          sx={{
            fontSize: '43px',
          }}
        />
        <Stack justifyContent="space-between">
          <Account>{account}</Account>
          <CardNumber>**** **** {card.number.slice(15)}</CardNumber>
        </Stack>
      </Footer>
    </CardRoot>
  );
}

export default BalanceCardSmall;
