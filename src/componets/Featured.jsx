import styled from "styled-components";

const FeatureContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 1;
`
const FeatureItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
`
const FeatureImg = styled.img`
    width: 100%;
    object-fit: cover; 
`
const FeatureTitle = styled.div`
    position: absolute;
    bottom: 30px;
    left: 20px;
`



function Featured () {
    return ( 
        <FeatureContainer>
            <FeatureItem>
                <FeatureImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                <FeatureTitle>
                    <h1>Dublin</h1>
                    <h2>Tola Properties</h2>
                </FeatureTitle>
            </FeatureItem>
            <FeatureItem>
                <FeatureImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/287808131.jpg?k=f9698ed1b64679fd173fc994051f5d01c49b8d4e7f442ce7427209c6da318e59&o=&hp=1" alt="Hotel2" />
                <FeatureTitle>
                    <h1>Austin</h1>
                    <h2>Tola Properties 2</h2>
                </FeatureTitle>
            </FeatureItem>
            <FeatureItem>
                <FeatureImg src="https://t-cf.bstatic.com/xdata/images/hotel/max500/303551162.jpg?k=66d08247265f46a5dfbe1c52c8fbd380c77095827c5b97427dd40e6db1bfd75a&o=&hp=1" alt="Hotel3" />
                <FeatureTitle>
                    <h1>Abuja</h1>
                    <h2>Tola Properties 3</h2>
                </FeatureTitle>
            </FeatureItem>
        </FeatureContainer>
     );
}

export default Featured ;