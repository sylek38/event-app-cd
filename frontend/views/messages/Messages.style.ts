import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;

    div {
        font-size: 1rem;
        font-weight: 600;
    }
`;
export const MessagesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 40px;
    max-height: 400px;
    overflow-y: scroll;
    padding-bottom: 30px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 1.5rem;
    padding: 0.5rem 1.125rem;

    > span + span {
        margin-top: 3px;
        color: #c6c6c6;
        font-size: 12px;
    }

    &:nth-child(odd) {
        background-color: var(--primary-green-color);
        align-self: flex-end;
        > span + span {
            color: white;
        }
    }
    &:nth-child(even) {
        background-color: var(--tertiary-background);
    }
`;

export const FirstItem = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 1.5rem;
    padding: 0.5rem 1.125rem;
    background-color: var(--tertiary-background);

    span {
        + span {
            margin-top: 3px;
            color: #c6c6c6;
            font-size: 12px;
        }
    }
`;

export const CreateMessage = styled.div`
    display: flex;
    /* align-items:center; */
    padding-top: 30px;
    gap: 30px;
`;
