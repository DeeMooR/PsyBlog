import styled from 'styled-components';

export const MainImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 50%;
  background: url(${props => props.image}) 50% 0 no-repeat;
  background-size: cover;
`;

export const CardSmallImage = styled.div<{ image: string }>`
  width: calc(100% - 32px);
  height: 0px;
  padding-bottom: 56%;
  margin: 16px auto 0;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 6px;
`;

export const CardMediumImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 56%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 6px;
`;

export const PostImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 56%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;