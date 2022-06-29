import styled from "styled-components";
import Header from "../componets/Header";
import Navbar from './../componets/Navbar';
import { DateRange } from 'react-date-range';
import { FaCalendarDay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { format } from 'date-fns';
import SearchPreview from './../componets/SearchPreview';

const ListContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

`
const ListWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
`
const ListSearch = styled.div`
    flex: 1;
    background-color: #febb02;
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    height: max-content;
    top: 10px;

    h1{
        font-size: 20px;
        color: #555;
        margin-bottom: 10px;
    }
`
const ListResult = styled.div`
    flex: 3;
`
const ListSearchItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;

    label{
        font-size: 14px;
    }

    input{
        height: 30px;
        border: none;
        border-radius: 4px;
        padding: 2px;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`
const ListOption = styled.div`
    padding: 10px;
`
const ListOptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 12px;

    input{
        width: 50px;
    }
`
// const ListOptionText = styled.div`
// `
const ListOptionButton = styled.button`
    padding: 10px;
    width: 100%;
    background: #0071c2;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;

`

function List() {
  
    const location = useLocation();
    console.log(location);

    const [destination, setDestination] = useState(location.state.destination);

    //Date and date dropdown controller
    const [openDate, setOpendate] = useState(false);
    const [date, setDate] = useState(location.state.date);
    const [option, setOption] = useState(location.state.option);
    
    return ( 
        <>
            <Navbar />
            <Header style={{ padding: "20px 0px 0px 0px"}} type="list"/>
            <ListContainer>
                <ListWrapper>
                    <ListSearch>
                        <h1>Search</h1>
                        <ListSearchItem>
                            <label>Destination/Propery name:</label>
                            <input type="text" placeholder={destination} />
                        </ListSearchItem>
                        <ListSearchItem>
                            <label>Check-in date</label>
                            <FaCalendarDay /><input onClick={()=>setOpendate(!openDate)} type="text" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")}`} />
                             {openDate && <DateRange 
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                                    /> }
                        </ListSearchItem>
                        <ListSearchItem>
                            <label>Check-out date</label>
                            <input type="text" placeholder={`${format(date[0].endDate, 'MM/dd/yyyy')}`} />
                        </ListSearchItem>
                    <ListOption>
                        <ListSearchItem>
                            <label>Option</label>
                            <ListOptionItem>
                                <span>Min price <small>per night</small></span>
                                <input type="number"/>
                            </ListOptionItem>
                            <ListOptionItem>
                                <span>Max price <small>per night</small></span>
                                <input type="number"/>
                            </ListOptionItem>
                            <ListOptionItem>
                                <span> Adult </span>
                                <input type="number" min={1} placeholder={option.adult}/>
                            </ListOptionItem>
                            <ListOptionItem>
                                <span>Children</span><input min={0} type="number" placeholder={option.children}/>
                            </ListOptionItem>
                            <ListOptionItem>
                                <span>Room</span>
                                <input type="number" min={1} placeholder={option.room}/>
                            </ListOptionItem>
                        </ListSearchItem>
                        <ListOptionButton>Search</ListOptionButton>
                    </ListOption>
                </ListSearch>
                    <ListResult>
                        <SearchPreview />
                        <SearchPreview />
                        <SearchPreview />
                        <SearchPreview />
                        <SearchPreview />
                    </ListResult>
                </ListWrapper>
            </ListContainer>
        </>
     );
}

export default List;