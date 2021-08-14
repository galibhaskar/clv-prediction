import * as React from 'react';
import Navbar from '../navbar';
import './styles.scss';

export interface IHeaderProps {
    pathName: string;
}

export interface IHeaderState {
    isNavBarFixed: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {
            isNavBarFixed: false
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

    public componentDidUpdate(prevProps: IHeaderProps) {
        if (this.props.pathName !== prevProps.pathName) {
            console.log(this.props.pathName);
            this.render();
        }
    }

    public render() {
        return <div className={(window.location.pathname === "/predict" ||
            (this.state.isNavBarFixed || window.location.pathname !== "/")) ? "headerContainerSticky" : "headerContainer headerContainerSticky"}>
            <div className={"headerWrapper"}>
                <div className={"title"}>
                    {`CLV Prediction`}
                </div>
                <Navbar />
            </div>
        </div>;
    }
}

export default Header;