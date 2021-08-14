import './styles.scss';
import Form from '../form';
import * as React from 'react';
import About from './sections/about';
import Footer from './sections/footer';
import TechStack from './sections/techStack';
import { Redirect, Route } from 'react-router';
import TeamSection from './sections/teamSection';
import LandingPage from './sections/landingPage';
import Features from './sections/features';
import Analysis from './sections/analysis';

export interface IBodyProps { }

export interface IBodyState { }

class Body extends React.Component<IBodyProps, IBodyState> {
    constructor(props: IBodyProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"bodyContainer"}>
            <Route exact path="/" >
                <LandingPage id={"Home"} />
                <About id={"About"} />
                <Features id={"Features"} />
                <Analysis id={"Analysis"} />
                <TechStack id={"TechStack"} />
                <TeamSection id={"Team"} />
                <Footer id={"Demo"} />
            </Route>
            <Route exact path="/predict">
                <Form />
            </Route>
            <Route path="/report">
                <iframe
                    className={"reportContainer"}
                    src="https://app.powerbi.com/reportEmbed?reportId=1881f7b6-3203-427a-8d79-6f17928225aa&autoAuth=true&ctid=865cc515-a530-4538-8ef8-072b7b2be759&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
                    frameBorder="0"
                    allowFullScreen={true}
                ></iframe>
            </Route>
            <Redirect to="/" />
        </div >;
    }
}

export default Body;