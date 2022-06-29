import styled from 'styled-components';


const Plist = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const PlistItem = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`
const PlistImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`
const PlistTitles = styled.div`
    position: relative;
    left: 10px;

    h1{
        font-size: 18px;
    }
    h2{
        font-size: 14px;
    }
`

function PropertyList() {
    return ( 
            <Plist>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/272858248.jpg?k=d15e23ec4ea700afa92fc9c73dfbc65dd8b7b7358af414b7e200858e3612d152&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>123 hotels</h2>
                    </PlistTitles>
               </PlistItem>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/271060089.jpg?k=9b2382a8c5f5a7ccc633024c39fb43a3f93809d3bc0e5ef52e59bd36808caaf2&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>456 hotels</h2>
                    </PlistTitles>
               </PlistItem>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/287808131.jpg?k=f9698ed1b64679fd173fc994051f5d01c49b8d4e7f442ce7427209c6da318e59&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>789 hotels</h2>
                    </PlistTitles>
               </PlistItem>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/287808131.jpg?k=f9698ed1b64679fd173fc994051f5d01c49b8d4e7f442ce7427209c6da318e59&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>011 hotels</h2>
                    </PlistTitles>
               </PlistItem>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/271060089.jpg?k=9b2382a8c5f5a7ccc633024c39fb43a3f93809d3bc0e5ef52e59bd36808caaf2&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>456 hotels</h2>
                    </PlistTitles>
               </PlistItem>
               <PlistItem>
                    <PlistImg src="https://t-cf.bstatic.com/xdata/images/hotel/max300/287808131.jpg?k=f9698ed1b64679fd173fc994051f5d01c49b8d4e7f442ce7427209c6da318e59&o=&hp=1" alt="Hotel1" />
                    <PlistTitles>
                        <h1>Hotels</h1>
                        <h2>789 hotels</h2>
                    </PlistTitles>
               </PlistItem>
            </Plist>
     );
}

export default PropertyList;