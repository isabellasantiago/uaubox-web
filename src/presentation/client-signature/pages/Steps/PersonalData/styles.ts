import styled from 'styled-components'


export const  Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 2;

    gap: 33px;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 120vh;
    padding: 52px;

    div {
        h2 {
            margin-bottom: 20px;
            width: 510px;
            height: 40px;
            justify-self: flex-start;
            font-size: 18px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: bold;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
    gap: 150px;
    
    max-width: 1000px;

    > section {
        h2 {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 14px;
            color: #000;
            line-height: 20px;
        }
    }
`;

export const PersonalDataSection =  styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    box-sizing: border-box;

    max-width: 430px;
    min-height: 300px;
    max-height: 400px;

    font-family: 'Montserrat';

`

export const Row = styled.div`
    display: flex;
    gap:10px;
`

export const AddressSection = styled(PersonalDataSection)`
    max-height: 500px;
    
    > &:nth-child(2){
        margin-bottom: 35px;
    }
`

export const LoginDataSection = styled(PersonalDataSection)`
    align-items: flex-start;
`