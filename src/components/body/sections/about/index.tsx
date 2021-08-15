import * as React from 'react';
import './styles.scss';
import Image from '../../../../assets/About.svg';
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
                        {`Overview of our app`}
                    </div>
                    <p className={"description"}>
                        {`Our model proactively predicts the interception of the risks and help extend the lifetime of customers by personalizing the content and run targeted campaigns. Thus, improved business.​`}
                    </p>
                    <div className={"appFeatures"}>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Improve business revenue`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Improve upselling and cross selling opportunities`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Retain potential valuable customers`}
                            </span>
                        </div>
                        <div className={"featureItem"}>
                            <Icon iconName="SkypeCircleArrow" />
                            <span className={"itemDescription"}>
                                {`Improve customer understanding`}
                            </span>
                        </div>
                    </div>
                </div>
                <img src={Image} alt={"about"} width={400} />
            </section>
        </div>;
    }
}

export default About;