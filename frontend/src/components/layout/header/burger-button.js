import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import { responsive } from 'ui';

const Outer = styled.button.attrs(() => ({
  type: 'button'
}))`
  /* appearance: none; */
  /* display: none; */
  cursor: pointer;
  background: transparent;
  width: 24px;
  height: 24px;
  position: fixed;
  /* margin-right: 15px; */
  margin-top: 0px;
  margin-left: -70px;
  /* left: 20px; */
  z-index: 100;
  padding: 0;

  ${responsive.smAndLess} {
    display: block;
    position: absolute;
    right: 15px;
  }
`;

const Lines = styled.div`
  width: 70%;
  position: absolute;
  background: ${(p) => (p.open ? 'transparent' : '#6C584C')};
  height: 2px;
  top: 50%;
  margin-top: -2px;
  border-radius: 2px;
  transition: all 0.2s ease-out;

  &:before,
  &:after {
    width: 100%;
    border-radius: 2px;
    top: -14px;
    background: #6C584C;
    height: 2px;
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s ease-out;
  }
  &:after {
    transform: ${(p) => (p.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    left: ${(p) => (p.open ? '0px' : '0px')};
    width: ${(p) => (p.open ? '100%' : 'calc(100% - 8px)')};
    top: ${(p) => (p.open ? '0' : '5px')};

    ${responsive.smAndLess} {
      left: ${(p) => (p.open ? '0px' : '8px')};
    }
  }
  &:before {
    transform: ${(p) => (p.open ? 'rotate(45deg)' : 'rotate(0deg)')};
    top: ${(p) => (p.open ? '0' : '-5px')};
  }
`;

export default function BurgerButton({ active, onClick }) {
  const { t } = useTranslation('common');

  return (
    <Outer open={active} onClick={onClick} aria-label={t('menu')}>
      <Lines open={active} />
    </Outer>
  );
}
