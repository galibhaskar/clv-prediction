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
                        {`Technology Stack`}
                    </span>
                    <h3>
                        {`Here are the list of technologies used in our CLV predictor`}
                    </h3>
                </div>
                <div className={"itemsContainer"}>
                    {
                        TechStackConfig.map(_tech => {
                            return <div className={"itemWrapper"} key={_tech.title}>
                                {/* <Icon className={"itemIcon"} iconName="ScaleVolume" /> */}
                                <img src={_tech.image} alt={_tech.title} width={100} height={100} />
                                <div className={"itemDescriptionWrapper"}>
                                    {_tech.title}
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>;
    }
}

export default TechStack;