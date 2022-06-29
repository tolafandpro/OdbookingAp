import Header from '../componets/Header';
import Navbar from './../componets/Navbar';
import Featured from '../componets/Featured';
import styled from 'styled-components';
import PropertyList from '../componets/PropertyList';
import HomeList from '../componets/HomeList';
import MailList from '../componets/MailList';
import Footer from '../componets/Footer';

const HomeContainer = styled.div`
    margin-top: 50px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const HomeTitle = styled.h1`
    width: 1024px;
    font-size: 20px;
`

function Home() {
    return ( 
        <>
            <Navbar />
            <Header />
            <HomeContainer>
                <Featured />
                <HomeTitle>Browse By Property</HomeTitle>
                <PropertyList />
                <HomeTitle>Homes guest love</HomeTitle>
                <HomeList />
                <MailList />
                <Footer />
            </HomeContainer> 

        </>
     );
}

export default Home;