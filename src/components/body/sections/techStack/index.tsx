import { Icon, initializeIcons } from '@fluentui/react';
import * as React from 'react';
import TechStackConfig from '../../../../configs/TechStackConfig';
import './styles.scss';

initializeIcons();

export interface ITechStackProps {
    id: string;
}

export interface ITechStackState { }

class TechStack extends React.Component<ITechStackProps, ITechStackState> {
    constructor(props: ITechStackProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"techStackContainer"} id={this.props.id}>
            <section className={"techStackWrapper"}>

                <div className={"detailsWrapper"}>
                    <span>
                        {`Key TechStack`}
                    </span>
                    <h3>
                        {`We will helps you to build beautiful websites that stand out and automatically adapt to your style.`}
                    </h3>
                </div>
                <div className={"itemsContainer"}>
                    {
                        TechStackConfig.map(_tech => {
                            return <div className={"itemWrapper"} key={_tech.title}>
                                <Icon className={"itemIcon"} iconName="ScaleVolume" />
                                <div className={"itemDescriptionWrapper"}>
                                    <h4>
                                        {_tech.title}
                                    </h4>
                                    <p className={"itemDescription"}>
                                        {`All components are built to be used in any combination.`}
                                    </p>
                                </div>
                            </div>
                        })
                    }

                    {/* <div className={"itemWrapper"}>
                        <div className={"itemDescriptionWrapper"}>
                            <Icon className={"itemIcon"} iconName="LocationCircle" />
                            <h4>
                                {`Responsive`}
                            </h4>
                            <p className={"itemDescription"}>
                                {`Quick is optimized to work for most devices.`}
                            </p>
                        </div>
                    </div>
                    <div className={"itemWrapper"}>
                        <Icon className={"itemIcon"} iconName="MapLayers" />
                        <div className={"itemDescriptionWrapper"}>
                            <h4>
                                {`Scalable`}
                            </h4>
                            <p className={"itemDescription"}>
                                {`Remain consistent while developing new TechStack.`}
                            </p>
                        </div>
                    </div>
                    <div className={"itemWrapper"}>
                        <Icon className={"itemIcon"} iconName="CustomList" />
                        <div className={"itemDescriptionWrapper"}>
                            <h4>
                                {`Customizable`}
                            </h4>
                            <p className={"itemDescription"}>
                                {`Change a few variables and the whole theme adapts.`}
                            </p>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>;
    }
}

export default TechStack;