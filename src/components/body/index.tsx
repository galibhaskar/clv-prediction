import './styles.scss';
import Form from '../form';
import * as React from 'react';
import About from './sections/about';
import Footer from './sections/footer';
import TechStack from './sections/techStack';
import { Route } from 'react-router';
import TeamSection from './sections/teamSection';
import LandingPage from './sections/landingPage';
import Features from './sections/features';
import Analysis from './sections/analysis';
import Equation from './sections/equation';
import { UserMode } from '../../concerns/UserMode';
import { PrimaryButton, Stack, TextField } from '@fluentui/react';
import Report from '../report';

export interface IBodyProps {
    userMode: UserMode;
}

export interface IBodyState {
    apiURL: string;
    endpointUrl: string;
}

class Body extends React.Component<IBodyProps, IBodyState> {
    constructor(props: IBodyProps) {
        super(props);
        this.state = {
            apiURL: "",
            endpointUrl: ""
        }
    }

    public render() {
        return <div className={"bodyContainer"}>
            <Route exact path="/" >
                <LandingPage id={"Home"} userMode={this.props.userMode} />
                <About id={"About"} />
                <Equation />
                <Features id={"Features"} />
                {
                    this.props.userMode === UserMode.Admin &&
                    <Analysis id={"Analysis"} />
                }
                <TechStack id={"TechStack"} />
                <TeamSection id={"Team"} />
                <Footer id={"Demo"} />
            </Route>
            <Route exact path="/predict">
                <Form userMode={this.props.userMode} apiUrl={this.state.apiURL} />
            </Route>
            <Route exact path="/apiurl">
                <Stack style={{
                    textAlign: "center",
                    padding: '100px 0',
                    maxWidth: '50%',
                    margin: 'auto'
                }}>
                    <TextField
                        styles={{ root: { marginBottom: 30 } }}
                        label="API Endpoint Url"
                        value={this.state.endpointUrl}
                        onChange={(event: any) => this.setState({ endpointUrl: event.target.value })}
                    />
                    <PrimaryButton
                        styles={{
                            root: {
                                maxWidth: 200,
                                margin: 'auto'
                            }
                        }}
                        text={`Update API URL`}
                        disabled={this.state.endpointUrl === this.state.apiURL}
                        onClick={() => this.setState({ apiURL: this.state.endpointUrl })}
                    />
                </Stack>
            </Route>
            <Route exact path="/report">
                {/* <iframe
                    className={"reportContainer"}
                    src="https://app.powerbi.com/reportEmbed?reportId=1881f7b6-3203-427a-8d79-6f17928225aa&autoAuth=true&ctid=865cc515-a530-4538-8ef8-072b7b2be759&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
                    frameBorder="0"
                    allowFullScreen={true}
                ></iframe> */}
                <Report />
            </Route>
        </div >;
    }
}

export default Body;