import styled from 'styled-components';

export const CurrencyCardContainer = styled.article`
  gap: 12px;
  width: 100%;
  padding: 14px;
  display: flex;
  max-width: 100%;
  align-items: center;
  border-radius: 16px;
  background-color: ${(props) => props?.theme?.colors?.primary + props?.theme?.opacities?.[20]};

  > .CurrencyCard_Flag {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 12px;
  }

  > section {
    display: flex;
    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;
  }
`;

export const CurrencyCardHeader = styled.header`
  gap: 12px;
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h5};
  font-weight: ${(props) => props?.theme?.typography?.weight?.bold};
  color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[80]}`};

  > h4 {
    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > p {
    display: flex;
    text-align: end;
    min-width: min-content;
  }
`;

export const CurrencyCardFooter = styled.footer`
  gap: 12px;
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props?.theme?.typography?.sizes?.h6};
  
  > .CurrencyCard_CODE {
    font-weight: ${(props) => props?.theme?.typography?.weight?.medium};
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[60]}`};
  }

  > .CurrencyCard_VALUE {
    text-align: end;
    min-width: min-content;
    font-weight: ${(props) => props?.theme?.typography?.weight?.regular};
    color: ${(props) => `${props?.theme?.colors?.typography + props?.theme?.opacities?.[40]}`};
  }
`;