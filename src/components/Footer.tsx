import styled from "styled-components";

const Footer = () => (
    <FooterContainer>
        <div>
            Credit to Jenny T. Liang
        </div>
        <div>
        <TrackerTitle>
            <a href="https://clustrmaps.com/site/1bjth" target="_blank" title="Visit tracker">
                Pageviews
            </a>
        </TrackerTitle>
        <a href="https://clustrmaps.com/site/1bjth" title="Visit tracker">
            <TrackerImage src="//www.clustrmaps.com/map_v2.png?d=TNBaaR_zl2HlH8ggCWre_Zof3EWUXr0GghhKRlRagno&cl=ffffff"/>
        </a>
        </div>

    </FooterContainer>

);

const TrackerTitle = styled.span`
    margin-top: 1000px;
`

const TrackerImage = styled.img`
    display: none;
`

const FooterContainer = styled.div`
    margin-top: 16px;
    text-align: right;
    font-size: 0.9em;
`

export default Footer;