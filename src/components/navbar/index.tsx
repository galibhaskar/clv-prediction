import * as React from 'react';
import { Link } from 'react-router-dom';
import NavConfig from '../../configs/NavConfig';
import './styles.scss';

export interface INavBarProps { }

export interface INavBarState { }

class Navbar extends React.Component<INavBarProps, INavBarState> {
    constructor(props: INavBarProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"navContainer"}>
            {
                NavConfig.map(_navItem => <Link to="/" key={_navItem.key}>
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
                (window.scrollY > 500 || window.location.pathname !== "/") && <Link to="/predict">
                    <div className={"titleButton"}>
                        {`Predict CLV`}
                    </div>
                </Link>
            }
        </div>;
    }
}

export default Navbar;