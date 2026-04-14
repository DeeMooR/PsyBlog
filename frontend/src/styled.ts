import styled from 'styled-components';

export const AboutImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 125%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;

  @media (max-width: 780px) {
    padding-bottom: 120%;
  }
`;

export const ConsultationImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 125%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;

  @media (max-width: 780px) {
    padding-bottom: 100%;
  }
`;

export const PriceItemImage = styled.div<{ image: string }>`
  width: 100%;
  height: 0px;
  padding-bottom: 120%;
  background: url(${props => props.image}) 50% 50% no-repeat;
  background-size: cover;
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

  @media (max-width: 480px) {
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