import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        label: (<Link to='/'>Home</Link>),
        key: 'home',
        // icon: <HomeOutlined/>
    },
    {
        label: (<Link to='/papers'>Papers</Link>),
        key: 'papers',
        // icon: <FormOutlined />
    },
];

const Header = (props: { page: string }) => {
    const [showIPA, setShowIPA] = useState(false);
    
    const toggleVisibility = () => {
        setShowIPA(!showIPA);
      };
    
    return (
        <React.Fragment>
            <HeaderContainer>
                <Photo src="images/icon.jpg"/>
                <Info>
                    <h1>Chenyang Yang
                    <Pronounciation>
							
                            <a onClick={toggleVisibility}>
							[pronunciation]
							</a>

                            {
                                showIPA && 
                                    <IPA id="demo">
								
									IPA: &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; <b>/ʈʂʰən˧˥ iɑŋ˧˥/ &ensp; /iɑŋ˧˥/</b>
									<br />
									IPA (English): &emsp; <b>/tʃən jʌŋ/ &emsp;&emsp; /jʌŋ/</b>

                                     </IPA>
                            }
                    </Pronounciation>
                    </h1>
                    <p>
                        Ph.D. Student in Software Engineering<br/>
                        <a href="https://www.cs.cmu.edu/" target="_blank" rel="noreferrer">School of Computer Science</a><br/>
                        <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a>
                    </p>
                    {/* <p><a href="https://www.s3d.cmu.edu/" target="_blank" rel="noreferrer">Software and Societal Systems Department</a></p> */}
                    {/* <p><a href="https://www.cs.cmu.edu/" target="_blank" rel="noreferrer">School of Computer Science</a></p> */}
                    {/* <p><a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a></p> */}
                    <p>
                        <Email>chenyangy [at] cmu [dot] edu </Email> <br/>
                        <a href="cv.pdf" target="_blank" rel="noreferrer">CV</a> / <a href="https://scholar.google.com/citations?user=E5gadxYAAAAJ" target="_blank" rel="noreferrer">Google Scholar</a>
                        {" "} / {" "}
                        <a href="https://twitter.com/cyyang3_u" target="_blank" rel="noreferrer">Twitter</a>
                    </p>
                </Info>
            </HeaderContainer>
            <MyMenu mode="horizontal" items={items} selectedKeys={[props.page]} theme={"light"} />
        </React.Fragment>
    )
}

const Pronouns = styled.span`
    display: block;
`

const Pronounciation = styled.sup`
    cursor: pointer;
    vertical-align: top; 
    font-size:0.4em;
    position: relative;
`

const IPA = styled.div`
    font-family: Arial; 
    font-size: 1em; 
    letter-spacing:0.01em;
    position: relative; 
    // top: 2em; 
    left: 19em;
`

const MyMenu = styled(Menu)`
    margin-top: 36px;
    justify-content: center;
`

const Email = styled.span`
    font-family: monospace;
    font-size: 0.85em;
`

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 32px;

  @media (max-width: 450px) {
    display: grid;
    grid-gap: 0px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: none;
  }
`

const Info = styled.div`
  h1, p {
    margin-bottom: 0px;
  }

  :nth-child(2) > :nth-child(2), :nth-child(2) > :nth-child(5) {
    margin-bottom: 16px;
  }
`

const Photo = styled.img`
  width: 100%;
  margin: auto;
  border-radius: 100px;

  @media (max-width: 450px) {
    max-width: 175px;
  }
`

export default Header;