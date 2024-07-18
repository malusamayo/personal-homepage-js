import React from 'react';
import {Divider} from 'antd';
import styled from 'styled-components';
import News from './News';
import Education from './Education';

const HomeContent = () => (
    <React.Fragment>
        <div>
                <p> I am a third-year PhD student in <a href="https://s3d.cmu.edu/" target="_blank">Software and Societal Systems Department</a>, <a href="http://www.cs.cmu.edu/" target="_blank">School of Computer Science</a> at <a href="http://www.cmu.edu/" target="_blank">Carnegie Mellon University</a>,
					advised by <a href="https://www.cs.cmu.edu/~ckaestne/">Christian Kästner</a> and <a href="https://www.cs.cmu.edu/~sherryw/">Sherry Tongshuang Wu</a>.
				</p>
                <p>
                I work at the intersection of software engineering and human-centered AI. <b>I design methods and build systems to empower humans to develop and use AI applications.</b>
				</p>
				<p>
					I received my undergraduate degree from <a href="http://english.pku.edu.cn/" target="_blank">Peking University</a> in 2021,
					where I had the pleasure to work with Professor <a href="http://xiongyingfei.github.io" target="_blank">Yingfei Xiong</a>.
				</p>
            {/* News section */}
        </div>
        <Divider/>
        <News />  
        <Divider/>    
        <div>
        <h3>Education</h3>
        <Education />
        </div>  
    </React.Fragment>
);


export default HomeContent;