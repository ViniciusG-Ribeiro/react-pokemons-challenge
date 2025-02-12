import styled from 'styled-components'

export default function List(props) {

    return (
        <Div>

            <Tittle>{props.tittle}</Tittle>

            <StyledTable>

                <tbody>
                    {props.array.map((skills, index) => {
                        if (!skills[1]) return null;

                        return (
                            <tr key={index}>
                                <td>{skills[0]}</td>
                                <td>{skills[1]}</td>
                            </tr>
                        );
                    })}
                </tbody>

            </StyledTable>

        </Div>
    )
};

const Div = styled.div`
    border: 1px solid white;
    border-radius: 8px;
    padding: 20px;
    justify-items: center;
    max-height:700px;
    background-color: rgba(255, 255, 255, 0.1);
    overflow-y: auto;

    /* Personalização do Scroll */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        border: 2px solid rgba(255, 255, 255, 0.2);
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.7);
    }

    /* Para Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1);


        @media (max-width: 550px) {
        max-height:400px;
    }
`

const Tittle = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
`

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    td {
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    tr:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;