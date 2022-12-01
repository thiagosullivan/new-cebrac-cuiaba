import React from 'react';
import data from './data.json';
import { WhoWeDoCard, WhoWeDoCards, WhoWeDoContainer } from './style';

function WhoWeDo() {
    
  return (
    <WhoWeDoContainer>
        <div className='who__we__do__content'>
            <h2>Como <br/>fazemos</h2>
            <WhoWeDoCards>
                {data.cards.map ((card, index) => {
                    return (
                            <WhoWeDoCard key={index}>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </WhoWeDoCard>
                        )
                    }
                )}
                {/* <WhoWeDoCard>
                    
                </WhoWeDoCard> */}
            </WhoWeDoCards>
        </div>

    </WhoWeDoContainer>
  )
}

export default WhoWeDo