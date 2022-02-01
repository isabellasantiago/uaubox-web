import styled from 'styled-components'


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;


    label {
        font: 14px 'Montserrat';
        line-height: 18px;
        color: #000;
        margin-bottom: 5px;
        margin-left: 5px;
    }
    input{
        width: 280px;
        height: 40px;

        font: 14px 'Montserrat';

        background: #FFFFFF;
        
        box-sizing: border-box;
        border: 1px solid #727272;
        border-radius: 8px;
        padding: 0px 5px;
    }
}


`