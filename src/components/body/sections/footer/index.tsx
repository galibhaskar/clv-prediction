import { Icon } from '@fluentui/react';
import * as React from 'react';
import FooterTop from '../../../../assets/footer-top-shape.png';
import './styles.scss';

export interface IFooterProps {
    id: string;
}

export interface IFooterState { }

class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: IFooterProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"footerContainer"} id={this.props.id}>
            <img
                src={FooterTop}
                alt={"footer top image"}
                className={"footerTopImage"}
            />
            <section className={"footerWrapper"}>
                <Icon
                    className={"playIcon"}
                    iconName={"Play"}
                />
                <h1>
                    {`Watch our Demo`}
                </h1>
                <span>
                    {`Copyrights © 2021. All rights reserved by Team Singham`}
                </span>
            </section>
        </div>;
    }
}

export default Footer;