import * as React from 'react';
import './styles.scss';
import Image1 from '../../../../assets/Image1.svg';
import Image2 from '../../../../assets/Image2.svg';
import Image3 from '../../../../assets/Image3.svg';
import Image4 from '../../../../assets/Image4.svg';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export interface ILandingPageProps {
    id: string;
}

export interface ILandingPageState {
    stats: any;
}

export enum ValueType {
    Percent,
    Number
}

class LandingPage extends React.Component<ILandingPageProps, ILandingPageState> {
    constructor(props: ILandingPageProps) {
        super(props);
        this.state = {
            stats: {
                data: 0,
                features: 0,
                accuracy: 0,
                businessImpact: 0
            }
        }
    }

    private renderStatisticsItem = (key: string, item: string, value: any, valueType: ValueType) => {
        let _intervalId: any = setInterval(() => {
            if (this.state.stats[key] === value)
                clearInterval(_intervalId);
            else
                this.setState({
                    stats: {
                        ...this.state.stats,
                        [key]: this.state.stats[key] + (value > 1000 ? 1000 : 0.5)
                    }
                })
        }, 10);

        return <div className={"statisticsItemWrapper"}>
            <span>
                {
                    valueType == ValueType.Percent ?
                        `~ ${this.state.stats[key]}%` : this.state.stats[key]
                }
            </span>
            <div className={"fieldValue"}>
                {item}
            </div>
        </div>;
    }

    public render() {
        return <div className={"landingPageContainer"} id={this.props.id}>
            <section className={"titleSection"}>
                <div className={"details"}>
                    <h1 className={"title"}>
                        {`Retention is the new business`}
                    </h1>
                    <p>
                        {`Conveniently use our platform to predict customer lifetime value and increase your business revenue multifold`}
                    </p>
                    <Link to="/predict">
                        <div className={"titleButton"}>
                            {`Predict CLV`}
                        </div>
                    </Link>
                </div>
                <div className={"titleImagesContainer"}>
                    <img
                        className={"animation-one"}
                        src={Image1}
                        alt={"animatedImage"}
                        width={150}
                    />
                    <img
                        className={"animation-two"}
                        src={Image2}
                        alt={"animatedImage"}
                        width={120}
                    />
                    <img
                        className={"animation-four"}
                        src={Image3}
                        alt={"animatedImage"}
                        width={200}
                    />
                    <img
                        className={"animation-three"}
                        src={Image4}
                        alt={"animatedImage"}
                        width={120}
                    />
                </div>
            </section>
            <div className={"statisticsBar"}>
                {this.renderStatisticsItem("data", "Data", 20000, ValueType.Number)}
                {this.renderStatisticsItem("features", "Features", 20, ValueType.Number)}
                {this.renderStatisticsItem("accuracy", "Accuracy", 85, ValueType.Percent)}
                {this.renderStatisticsItem("businessImpact", "Business Impact", 60, ValueType.Percent)}
            </div>
        </div>;
    }
}

export default LandingPage;