import styled from 'styled-components';

export const CardImage = styled.div<{ image: string }>`
    width: 100%;
    height: 0px;
    padding-bottom: 60%;
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
    border-radius: 5px;
`;