import styled from 'styled-components';

export const BoxLaunchs = styled.div`

`;

export const Title = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
`;

export const SeeMore = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
    text-align: center;
    font-family: 'SF UI Text Medium';
    font-size: 1.125rem;
    text-transform: uppercase;
    
    a {
        border: 1px solid #fff;
        padding: .5rem 1rem;
    }
`;

export const Launch = styled.div`
    padding: 1.5rem 0;
    font-family: 'SF UI Text Medium';
    display: grid;
    grid-template-columns: 25% 75%;

    .name {
        font-size: 1.5rem;
        font-family: 'SF UI Text Bold';
        margin-bottom: .5rem;
    }

    .image {
        min-height: 250px;
        background-size: cover;
        background-position: center;
        z-index: 1;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: flex-start;

        .video {
            margin-top: 1.5rem;

            button {
                background: transparent;
                color: #FFF;
                font-family: 'SF UI Text Medium';
                font-size: .875rem;
                display: inline-block;
                border: 1px solid #FFF;
                padding: .5rem 2rem;
                cursor: pointer;
            }
        }
    }

    .launch {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        min-height: 100px;
        align-items: center;

        p {
            font-family: 'SF UI Text Medium';
            font-size: 1.75rem;
            text-transform: uppercase;
        }
    }

    p {
        margin: 0;
        font-size: .875rem;
    }
`;