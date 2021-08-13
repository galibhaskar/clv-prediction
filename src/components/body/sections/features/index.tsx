import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
import Image1 from '../../../../assets/Male.png';
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
                    autoPlay
                    emulateTouch
                    infiniteLoop
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    {
                        FeaturesConfig.map(_feature => {
                            return <div key={_feature.key} className={"featureItem"}>
                                <img
                                    src={_feature.image}
                                    width={200}
                                    height={200}
                                    className={"imageContainer"}
                                />
                                <div className={"detailsWrapper"}>
                                    <h1 className={"featureTitle"}>
                                        {_feature.title}
                                    </h1>
                                    <span className={"featureDescription"}>
                                        {_feature.description}
                                    </span>
                                </div>
                            </div>
                        })
                    }
                </Carousel>
            </section>
        </div>;
    }
}

export default Features;