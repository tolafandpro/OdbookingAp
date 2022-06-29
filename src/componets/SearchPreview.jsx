import  styled  from 'styled-components';

const SearchPreviewContainer = styled.div`
  border: 2px solid lightgray;
  padding: 10px;
  display: flex;
  border-radius: 5px
  justify-content: space-between;
  margin-bottom: 15px;
`
const PreviewImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
`
const PreviewDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const SearchTitle = styled.span`
    font-size: 20px;
    color: #0071c2;
`
const SearchDistance = styled.span`
    font-size: 12px;
`
const SearchTaxi = styled.span`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px;
`
const SearchSubtitle = styled.span`
    font-size: 12px;
    font-weight: bold;
`
const SearchFeatures = styled.span`
    font-size: 12px;
`
const SearchCancel = styled.span`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`
const SearchCancelSuptitle = styled.span`
font-size: 12px;
color: #008009;
`
const SearchDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const SearchRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center

    span{
        font-size: 24px;
        font-weight: 500;
    }
    button{
        background-color: #003580;
        color: white;
        padding: 8px;
        font-weight: bold;
        border: none;
        border-radius: 6px 6px 6px 0px;
    }
`
const SearchDetailsPrice = styled.span`
font-size: 24px;
`
const SrTaxOp = styled.span`
    font-size: 12px;
    color: gray;
`
const SearchItemCheckBtn = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    padding: 10px 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 70%;
    margin-left: 4.6rem;

`
const SearchDetailsText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 5px;
`
function SearchPreview () {
    return ( 
        <>
            <SearchPreviewContainer>
                <PreviewImage src="https://t-cf.bstatic.com/xdata/images/hotel/max500/124542521.jpg?k=f08d9f36a994f98ef8e2361c53d069c30f96dd448c05393d62ab3df116e7aef2&o=&hp=1" alt="Hotel1" />
                
                <PreviewDesc>
                    <SearchTitle>Tower Street Apartments</SearchTitle>
                    <SearchDistance>500m from center</SearchDistance>
                    <SearchTaxi>Free airport taxi</SearchTaxi>
                    <SearchSubtitle>Stuido Apartment with Air condition</SearchSubtitle>
                    <SearchFeatures>Entire studio . 1 bathroom . 21m 1 full bed </SearchFeatures>
                    <SearchCancel>Free cancellation </SearchCancel>
                    <SearchCancelSuptitle>You can cancel later, so lock in this great price today </SearchCancelSuptitle>
                </PreviewDesc>
                <SearchDetails>
                    <SearchRating>
                        <span>Excellent</span>
                        <button>8.9</button>
                    </SearchRating>
                    <SearchDetailsText>
                        <SearchDetailsPrice>$123</SearchDetailsPrice>
                        <SrTaxOp>Includes Taxes and fees</SrTaxOp>
                        <SearchItemCheckBtn>See availablity</SearchItemCheckBtn>
                    </SearchDetailsText>   
                </SearchDetails>
            </SearchPreviewContainer>
        </>
     );
}

export default SearchPreview ;