import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturesConfig from '../../../../configs/FeaturesConfig';

export interface IFeaturesProps {
    id: string;
}

export interface IFeaturesState { }

class Features extends React.Component<IFeaturesProps, IFeaturesState> {
    constructor(props: IFeaturesProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"featuresContainer"} id={this.props.id}>
            <section className={"featuresWrapper"}>
                <div className="titleWrapper">
                    {`Key features our app`}
                </div>
                <Carousel
                    // autoPlay
                    emulateTouch
                    infiniteLoop
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    {
                        FeaturesConfig.map((_feature, index: number) => {
                            return <div key={_feature.key} className={"featureItem"}>
                                {
                                    index % 2 === 0 && <img
                                        src={_feature.image}
                                        width={200}
                                        height={200}
                                        alt={`feature${_feature.key}`}
                                        className={"imageContainer"}
                                    />
                                }
                                <div className={"detailsWrapper"}>
                                    <h1 className={"featureTitle"}>
                                        {_feature.title}
                                    </h1>
                                    <span className={"featureDescription"}>
                                        {_feature.description}
                                    </span>
                                </div>
                                {
                                    index % 2 !== 0 && <img
                                        src={_feature.image}
                                        width={200}
                                        height={200}
                                        alt={`feature${_feature.key}`}
                                        className={"imageContainer"}
                                    />
                                }
                            </div>
                        })
                    }
                </Carousel>
            </section>
        </div>;
    }
}

export default Features;