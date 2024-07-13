import styled from 'styled-components';

export const CardImage = styled.div<{ image: string }>`
    width: calc(100% - 32px);
    height: 0px;
    padding-bottom: 60%;
    margin: 16px auto 0;
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
    border-radius: 6px;
`;