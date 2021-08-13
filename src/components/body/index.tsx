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
            <Redirect to="/" />
        </div>;
    }
}

export default Body;