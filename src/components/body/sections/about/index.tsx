import * as React from 'react';
import './styles.scss';
import Image from '../../../../assets/Image1.svg';
import { Icon, initializeIcons } from '@fluentui/react';

export interface IAboutProps {
    id: string;
}

export interface IAboutState { }

initializeIcons();

class About extends React.Component<IAboutProps, IAboutState> {
    constructor(props: IAboutProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"aboutContainer"} id={this.props.id}>
            <section className={"aboutWrapper"}>
                <div className={"detailsWrapper"}>
                    <div className={"title"}>
                        {`About our app`}
                    </div>
                    <h1>
                        {`Deliver your product using CLV`}
                    </h1>
                    <p className={"description"}>
                        {`Quick has all the right tools in order 
                        to make your website building process a breeze and automatize
                         your time-consuming tasks in your development workflow.`}
                    </p>
                    <div className={"appFeatures"}>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Tones of SASS variables`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Tones of SASS variables`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Tones of SASS variables`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Tones of SASS variables`}
                            </span>
                        </div>
                    </div>
                </div>
                <img src={Image} alt="image" width={150} />
            </section>
        </div>;
    }
}

export default About;