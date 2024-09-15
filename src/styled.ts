import styled from 'styled-components';

export const MainImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 46.27%;
  background: url(${props => props.image}) 50% 0 no-repeat;
  background-size: cover;
`;

export const AboutImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 140%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;
`;

export const PriceItemImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 120%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;
  border: 6px solid var(--white);
`;

export const ContactsImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
`;

export const CardSmallImage = styled.div<{ image: File | null }>`
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background: url(${props => props.image && URL.createObjectURL(props.image)}) no-repeat center;
  background-size: cover;
`;




export const CardMediumImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 56%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 6px;
`;

export const PostImage = styled.div<{ image: File | null }>`
  width: 100%;
  height: 0px;
  padding-bottom: 56%;
  background: url(${props => props.image && URL.createObjectURL(props.image)}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;