import * as React from 'react';
import { Link } from 'react-router-dom';
import { UserMode } from '../../concerns/UserMode';
import NavConfig from '../../configs/NavConfig';
import './styles.scss';

export interface INavBarProps {
    userMode: UserMode;
}

export interface INavBarState { }

class Navbar extends React.Component<INavBarProps, INavBarState> {
    constructor(props: INavBarProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"navContainer"}>
            {
                NavConfig.map(_navItem => _navItem.hideInUserMode !== this.props.userMode &&
                    <Link to="/" key={_navItem.key}>
                        <div className={"navItem"}
                            onClick={() => {
                                document.getElementById(_navItem.path)?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            {_navItem.displayName}
                        </div>
                    </Link>
                )
            }
            {
                (window.scrollY > 500 || window.location.pathname !== "/") &&
                (window.location.pathname !== "/predict") && <Link to="/predict">
                    <div className={"titleButton"}>
                        {this.props.userMode === UserMode.Admin ? `Predict CLV` : `Check Offers`}
                    </div>
                </Link>
            }
        </div>;
    }
}

export default Navbar;