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
                NavConfig.map(_navItem => <Link to="/">
                    <div className={"navItem"}
                        key={_navItem.key}
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
                window.scrollY > 500 && <Link to="/predict">
                    <div className={"titleButton"}>
                        {`Predict CLV`}
                    </div>
                </Link>
            }
        </div>;
    }
}

export default Navbar;