import * as React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserMode } from '../concerns/UserMode';

export interface IAppProps { }

export interface IAppState {
    selectedUserMode: UserMode;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            selectedUserMode: UserMode.Admin
        }
    }

    public render() {
        console.log(this.state.selectedUserMode);
        return <>
            <Router>
                <Header
                    pathName={window.location.pathname}
                    selectedUserMode={this.state.selectedUserMode}
                    updateUserMode={(_selectedUserMode) => this.setState({ selectedUserMode: _selectedUserMode })}
                />
                <Body userMode={this.state.selectedUserMode} />
            </Router>,
        </>;
    }
}

export default App;