import { Toggle } from '@fluentui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserMode } from '../../concerns/UserMode';
import Navbar from '../navbar';
import './styles.scss';

export interface IHeaderProps {
    pathName: string;
    selectedUserMode: UserMode;
    updateUserMode: (userMode: UserMode) => void;
}

export interface IHeaderState {
    isNavBarFixed: boolean;
    userToggleChecked: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            isNavBarFixed: false,
            userToggleChecked: true
        };
    }

    public componentDidMount() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100)
                this.setState({ isNavBarFixed: true });
            else
                this.setState({ isNavBarFixed: false });
        });
    }

    public render() {
        return <div className={(window.location.pathname === "/predict" ||
            (this.state.isNavBarFixed || window.location.pathname !== "/")) ? "headerContainerSticky" : "headerContainer headerContainerSticky"}>
            <div className={"headerWrapper"}>
                <Toggle
                    styles={{
                        pill: {
                            background: this.state.userToggleChecked ? '#9629e6!important' : '',
                        },
                        text: {
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                    className={"userToggleButton"}
                    onText={UserMode.Admin}
                    offText={UserMode.User}
                    checked={this.props.selectedUserMode === UserMode.Admin}
                    onChange={(event: any, checked?: boolean) => {
                        this.setState({ userToggleChecked: !this.state.userToggleChecked });
                        this.props.updateUserMode(checked ? UserMode.Admin : UserMode.User);
                    }}
                />
                <Link to="/" className={"title"}>
                    {`CLV Predictor`}
                </Link>
                <Navbar userMode={this.props.selectedUserMode} />
            </div>
        </div>;
    }
}

export default Header;