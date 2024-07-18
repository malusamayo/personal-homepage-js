import React from 'react';
import {Divider} from 'antd';
import styled from 'styled-components';

const Education = () => (
    <React.Fragment>
        <ResearchProjectContainer>
                    <div>
                        2021 - present
                    </div>
                    <div>
                        <div><b>Carnegie Mellon University</b></div>
                        <div>Ph.D. student in Software Engineering</div>
                    </div>
        </ResearchProjectContainer>
        <ResearchProjectContainer>
                    <div>
                    2017 - 2021
                    </div>
                    <div>
                        <div><b>Peking University</b></div>
                        <div>Bachelor of Science (Summa Cum Laude) in Computer Science</div>
                        <div>Bachelor of Arts in Chinese Language and Literature</div>
                    </div>
        </ResearchProjectContainer>
    <div></div>  
    </React.Fragment>
)
const ResearchProjectContainer = styled.div`
    display: grid;
    grid-gap: 36px;
    grid-template-columns: 200px 1fr;
    align-items: top;
    padding: 12px;
    border-radius: 4px;

    @media (max-width: 650px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: none;
        img {
            max-height: 250px;
            max-width: 250px;
            width: 100%;
        }
    }

    p, h3 {
        margin-bottom: 2px;
    }
`

export default Education