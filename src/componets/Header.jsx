import styled from 'styled-components';
import { FaBed, FaPlane, FaTaxi, FaCar, FaMale, FaCalendarDay } from 'react-icons/fa';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';


const HeaderWrapper = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: ${ props => props.type === 'list' ? "20px 0px 0px 0px" : "20px 0px 100px 0px" }
`
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: 4em;
`
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    // &:active{
    //     border: 1px solid white;
    //     padding: 10px;
    //     border-radius: 20px;
    // }
`
const HeaderTitle = styled.div`

`
const HeaderDesc = styled.p`
    margin: 20px 0px;
`
const HeaderBtn = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        color: #0071c2;
        background-color: white;
    }
`
const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 8px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px
`
const HeaderSearchItem = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
const HeaderSearchText = styled.div`
    color: lightgrey;
`
const Options = styled.div`
    position: absolute;
    top: 50px;
    background: white;
    color: grey;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 0px -5px rgba(0, 0, 0, 0.4);
    z-index: 2;
`
const OptionCounter = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    gap: 10px;
    color: black;
`
const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
// const OptionText = styled.div`

// `
const OptionCounterButton = styled.button`
    width: 25px;
    height: 25px;
    border: 1px solid #0071c2;
    border-radius: 4px;
    color: white;
    background: #0071c2;
    cursor: pointer;
    align-items: center;

    &:disabled{
        cursor: not-allowed;
        background-color: #a10000;
    }
`
const DateContainer = styled.div`
    position: absolute;
    top: 50px;
    z-index: 3;
`
function Header({type}) {
    // This section is the Date range picker on the header 
    const [openDate, setOpenDate] = useState(false);
    const [ date, setDate ] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
        const [ destination, setDestination] = useState("");

       // for Option module in the search bar
        const [openOption, setOpenOption] = useState(false);
        const [option, setOption] = useState(
            {
                adult: 1,
                children: 0,
                room: 0,
            }
        );

        //This section logic sends the data and navigate to hotels page 
        const navigate = useNavigate();

        const handleOption = (name, opretion ) => {
            setOption(prev => {return {...prev, [name]: opretion === "increase" ? option[name] +1 : option[name] -1 }})
        }

        const handleSearch = () => {
            navigate("/hotels", {state: {date, option, destination}})
        }

    return ( 
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderList>
                    <HeaderListItem active="active">
                        <FaBed/><span>Stays</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaPlane/><span>Flight</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaCar/><span>Car rentals</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FaTaxi/><span>Airport taxis</span>
                    </HeaderListItem>
                </HeaderList>
                { type !== "list" && <>
                <HeaderTitle>
                    <h1>A Lifetime of discount It's Genius</h1>
                    <HeaderDesc>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem</span>
                    </HeaderDesc>
                    <HeaderBtn>
                        Sign in / Register
                    </HeaderBtn>
                    <HeaderSearch>
                        <HeaderSearchItem>
                         <FaBed style={{color: "lightgray", marginRight: "5px"}}/><input onChange={ (e) => setDestination(e.target.value) } style={{border: "none", outline: "none"}} type='text' placeholder='Where are you going ?' />
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                         <HeaderSearchText>
                             <FaCalendarDay style={{color: "lightgray", marginRight: "5px"}}/>
                             <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")}  to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                             <DateContainer>
                                { openDate && <DateRange 
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                                    /> }
                            </DateContainer>
                         </HeaderSearchText>
                         
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                         <HeaderSearchText><FaMale style={{color: "lightgray"}}/><span onClick={() => setOpenOption(!openOption) }>{`${option.adult} adult. ${option.children} children. ${option.room} room.` } </span></HeaderSearchText>
                         { openOption && <Options>
                             <OptionItem>
                                 <span className="optionText">Adult</span>
                                 <OptionCounter>
                                    <OptionCounterButton onClick={() => handleOption("adult", "decrease")} disabled={option.adult <= 1}>-</OptionCounterButton>
                                    <span className="optionCounterNumber">{option.adult}</span>
                                    <OptionCounterButton onClick={() => handleOption("adult", "increase")}>+</OptionCounterButton>
                                 </OptionCounter>
                             </OptionItem>
                             <OptionItem>
                                 <span className="optionText">Children</span>
                                 <OptionCounter>
                                    <OptionCounterButton onClick={() => handleOption("children", "decrease")} disabled={option.children < 1}>-</OptionCounterButton>
                                    <span className="optionCounterNumber">{option.children}</span>
                                    <OptionCounterButton onClick={() => handleOption("children", "increase")}>+</OptionCounterButton>
                                 </OptionCounter>
                             </OptionItem>
                             <OptionItem>
                                 <span className="optionText">Room</span>
                                 <OptionCounter>
                                    <OptionCounterButton onClick={() => handleOption("room", "decrease")} disabled={option.room < 1}>-</OptionCounterButton>
                                    <span className="optionCounterNumber">{option.room}</span>
                                    <OptionCounterButton onClick={() => handleOption("room", "increase")}>+</OptionCounterButton>
                                 </OptionCounter>
                             </OptionItem>
                         </Options> }
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                            <HeaderBtn onClick={() => handleSearch()}>Search</HeaderBtn>
                        </HeaderSearchItem>
                    </HeaderSearch>
                </HeaderTitle> </>}
            </HeaderContainer>
        </HeaderWrapper>
     );
}

export default Header;