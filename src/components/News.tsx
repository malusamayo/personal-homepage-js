import React from 'react';
import { Bold, ResearchProjectData, ResearchProjectsContainer, hasData } from './shared';
import ResearchProject from './ResearchProject';

const newsData = require('../data/news.json');
const publicationsData: ResearchProjectData[] = require('../data/publications.json');
const filteredPublications = publicationsData.filter(
    (e: ResearchProjectData) => {
        return e.highlight;
    }
)

const News = () => (
    <React.Fragment>
        {hasData(newsData) && 
            <React.Fragment>
                <h3>Selected Publications</h3>
                <ResearchProjectsContainer>
                                            {filteredPublications
                                                .map((e: ResearchProjectData) => {
                                                    return (
                                                        <ResearchProject key={e.title} {...e} / >
                                                    )
                                                })
                                            }
                </ResearchProjectsContainer>
                {/* <ul>
                    {newsData
                        .map((e: {date: string, description: string}, i: number ) => {
                            return <li key={i}> <Bold>[{e.date}]</Bold> {e.description}</li>     
                        })
                    }
                </ul> */}
            </React.Fragment>
        }
    </React.Fragment>
);

export default News;