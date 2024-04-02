import styled from '@emotion/styled';
import reactLogo from '../../../assets/react.svg';

const Navbar = () => {
  return (
    <HeaderBar>
      <LogoComboMark>
        <Logo src={reactLogo} alt="React logo" />
        <HeaderTitle>Bid Portal</HeaderTitle>
      </LogoComboMark>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #0081bd;
  min-height: 50px;
`;

const LogoComboMark = styled.div`
  display: flex;
  margin-left: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HeaderTitle = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #fff;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export default Navbar;
