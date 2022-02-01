import styled from 'styled-components'


export const Container = styled.div`
    margin-bottom: 20px;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 120px;

    border-bottom: 1px outset rgba(0,0,0, 0.43);

    
    &:first-child{
        margin-right: 34px;
    }
    gap: 65px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    
    margin-bottom: 65px;

`

export const NavBar = styled.nav`
    display: flex;
    gap: 30px;

    > button {
        text-decoration: none;
        color: rgba(0,0,0,1);
        font: 14px 'Montserrat', sans-serif;
        font-weight: bold;
        line-height: 22px;

        display: flex;
        align-items: center;
        gap: 10px;
        border: none;
        background: none;
        cursor: pointer;
    }
    
`

export const Logo = styled.div`
    width: 140px;
    height: 140px;

    display: flex;
    align-items: center;

    box-sizing: border-box;
`
export const Eclipse = styled("div")<{currentPage?: boolean}>`
    background: ${props => props.currentPage ?  "#FF3433" : "#fff"};
    color: ${props => props.currentPage ? "#fff" : "#000"};
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid rgba(51, 51, 51, 0.46);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 14px 600 'Montserrat', sans-serif;
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center;

    
`