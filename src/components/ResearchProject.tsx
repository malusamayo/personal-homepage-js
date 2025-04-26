import React from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { hasData, Bold, Italic, ResearchProjectData } from './shared'; 
import { PlaySquareFilled, FilePdfOutlined, LaptopOutlined, GlobalOutlined, GithubFilled, FundProjectionScreenOutlined } from '@ant-design/icons';


const coauthorData: { [name: string]: { name: string, url?: string } } = require('../data/coauthors.json');

const ResearchProject = (props: ResearchProjectData) => {
    return (
        <ResearchProjectContainer key={props.title}>
            {
                props.imageName ? 
                <ResearchProjectImageContainer>
                    <img src={'images/research/' + props.imageName} alt={'image of ' + props.title} />
                </ResearchProjectImageContainer> :
                <div />
            }
            <div>
                <ResearchProjectMetadata>
                    <h3>{props.title} {hasData(props.awards) && props.awards?.map((e) => <Tag color='purple'>{e}</Tag>)} </h3>
                    {hasData(props.authors) && <p>{getCoauthorData(props.authors)}</p>}
                    {props.venue && props.year && <p><Italic>{props.venue}</Italic></p>}
                    <p style={{"marginTop": "8px"}}>{props.description}</p>
                </ResearchProjectMetadata>
                {<p style={{"fontSize": "0.9em"}}><Bold>{props.abbr}&nbsp;</Bold>{getUrlData(props.urls)}</p>}
            </div>
        </ResearchProjectContainer>
    )
}

const getCoauthorData = (keys?: string[]) => {
    const data: any[] = [];
    keys?.forEach((key: string) => {
        const tempKey = key.replace('*', '')
        const hasAsterisk = key.endsWith('*')
        if (coauthorData[tempKey]) {
            if (coauthorData[tempKey].url) {
                data.push(<a href={coauthorData[tempKey].url} target="_blank" rel="noreferrer">{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</a>)
                data.push(<React.Fragment>, </React.Fragment>)
            } else if (tempKey === 'cy') {
                data.push(<Bold>{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</Bold>)
                data.push(<React.Fragment>, </React.Fragment>)
            } else {
                data.push(<React.Fragment>{coauthorData[tempKey].name}{hasAsterisk ? '*' : ''}</React.Fragment>)
                data.push(<React.Fragment>, </React.Fragment>)
            }
        } else {
            data.push(<React.Fragment>{tempKey}{hasAsterisk ? '*' : ''}</React.Fragment>)
            data.push(<React.Fragment>, </React.Fragment>)
        }
    })
    data.pop();

    return data;
}

const getUrlData = (urls?: {label: string, url: string}[]) => {
    const data: any[] = [];
    urls?.forEach((urlData: {label: string, url: string}) => {
        let icon = undefined;
        if (urlData.label === "presentation") {
            icon = <PlaySquareFilled/>;
        } else if (urlData.label === "paper") {
            icon = <FilePdfOutlined />;
        } else if (urlData.label === "demo") {
            icon = <LaptopOutlined />;
        } else if (urlData.label === "website") {
            icon = <GlobalOutlined />;
        } else if (urlData.label === "github") {
            icon = <GithubFilled />;
        } else if (urlData.label === "poster") {
            icon = <FundProjectionScreenOutlined />;
        }

        data.push(
            <React.Fragment>
                <a href={urlData.url} target="_blank" rel="noreferrer">{icon} {urlData.label}</a>
            </React.Fragment>
        )   
        data.push(<React.Fragment> / </React.Fragment>)
    });
    data.pop();
    
    return data;
}

const ResearchProjectMetadata = styled.div`
    margin-top: -20px;
`

const ResearchProjectImageContainer = styled.div`
    img {
        max-height: 200px;
        max-width: 200px;
        border-radius: 4px;
        border: 1px solid lightgrey;
    }

`

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

export default ResearchProject