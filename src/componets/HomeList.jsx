import styled from 'styled-components';


const HomeContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const HomeItem = styled.div`
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
`
const HomeImg = styled.img`
    width: 100%;
`
const HomeName = styled.div`
    font-weight: bold;      
`
const HomeCity = styled.div`
    font-weight: 300;
`
const HomePrice = styled.div`
    font-weight: 500;
`

const HomeRating = styled.button`
    background-color: #003580;
    padding: 5px;
    width: 30px;
    color: white;
    border: none;
    margin-right: 10px;
`
const HomeRatingBlock = styled.div`
    display: flex;
    align-items: center;
`

function HomeList() {
    return ( 
        <>
           <HomeContainer>
               <HomeItem>
                    <HomeImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                        <HomeName><span>Aparthotel Stare Miasto</span></HomeName>
                        <HomeCity><span>Toronto</span></HomeCity>
                        <HomePrice><span>Starting from $120</span></HomePrice>
                        <HomeRatingBlock>
                            <HomeRating>4.9</HomeRating><span>Excellent</span>  
                        </HomeRatingBlock>
                    </HomeItem>
                <HomeItem>
                    <HomeImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                        <HomeName><span>Aparthotel Stare Miasto</span></HomeName>
                        <HomeCity><span>Toronto</span></HomeCity>
                        <HomePrice><span>Starting from $120</span></HomePrice>
                        <HomeRatingBlock>
                            <HomeRating>3.5</HomeRating><span>Excellent</span>  
                        </HomeRatingBlock>
                </HomeItem>
                <HomeItem>
                    <HomeImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                        <HomeName><span>Aparthotel Stare Miasto</span></HomeName>
                        <HomeCity><span>Toronto</span></HomeCity>
                        <HomePrice><span>Starting from $120</span></HomePrice>
                        <HomeRatingBlock>
                            <HomeRating>4.0</HomeRating><span>Excellent</span>  
                        </HomeRatingBlock>
                </HomeItem>
                <HomeItem>
                    <HomeImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                        <HomeName><span>Aparthotel Stare Miasto</span></HomeName>
                        <HomeCity><span>Toronto</span></HomeCity>
                        <HomePrice><span>Starting from $120</span></HomePrice>
                        <HomeRatingBlock>
                            <HomeRating>3.0</HomeRating><span>Excellent</span>  
                        </HomeRatingBlock>
                </HomeItem>
           </HomeContainer>
        </>
     );
}

export default HomeList;