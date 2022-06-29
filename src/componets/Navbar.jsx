import styled  from "styled-components";

const NavWrapper = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`
const NavConatiner = styled.div`
    display: flex;
    width: 100%;
    max-width: 1024px;
    color: white;
    align-items: center;
    justify-content: space-between;
`
const Logo =styled.h1`
    font-weight: 500;
`
const NavItems = styled.div`
    align-items: center;
`

const NavButton = styled.button`
    margin-left: 20px;
    background: white;
    border-radius: 3px;
    border: 2px solid;
    color: palevioletred;
    padding: 0.25em 1em;
    cursor: pointer;
`


function Navbar() {
    return ( 
        <NavWrapper>
            <NavConatiner>
                <Logo>Oye Booking</Logo>
                    <NavItems>
                    <NavButton>
                        Register
                    </NavButton>
                    <NavButton>
                        Login
                    </NavButton>
                </NavItems>
                
            </NavConatiner>

        </NavWrapper>
     );
}

export default Navbar;