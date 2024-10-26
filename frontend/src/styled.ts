import styled from 'styled-components';

export const MainImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 46.27%;
  background: url(${props => props.image}) 50% 0 no-repeat;
  background-size: cover;

  filter: blur(0);
  transition: filter 0.3s linear;

  @media (max-width: 1199.98px) {
    padding-bottom: 50%;
  }
  @media (max-width: 999.98px) {
    padding-bottom: 55%;
  }
  @media (max-width: 799.98px) {
    padding-bottom: 65%;
  }
  @media (max-width: 599.98px) {
    padding-bottom: 120%;
  }
  @media (max-width: 499.98px) {
    padding-bottom: 140%;
  }
`;

export const AboutImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 140%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;

  @media (max-width: 699.98px) {
    padding-bottom: 120%;
  }
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

export const CardImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
`;

export const PostImage = styled.div<{ image: string | null }>`
  width: 100%;
  height: 0px;
  padding-bottom: 56%;
  background: url(${props => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 12px;

  @media (max-width: 479.98px) {
    padding-bottom: 70%;
  }
`;

export const InputFileBackground = styled.div<{ imageUpload?: string; warning?: boolean; }>`
  height: 140px;
  cursor: pointer;
  border: ${(props) => (props.warning && '1px solid var(--warning)')};
  background-image: url(${props => props.imageUpload});
  background-repeat: no-repeat;
  background-position: center;

  img {
    padding: 5px;
    height: 100%;
  }
`;