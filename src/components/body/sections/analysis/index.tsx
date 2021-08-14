import './styles.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/Image1.svg';

export interface IAnalysisProps {
    id: string;
}

export interface IAnalysisState { }

class Analysis extends React.Component<IAnalysisProps, IAnalysisState> {
    constructor(props: IAnalysisProps) {
        super(props);
        this.state = {}
    }

    public render() {
        return <div className={"analysisContainer"} id={this.props.id}>
            <section className={"analysisWrapper"}>
                <img
                    src={Image}
                    alt={"analysis"}
                    width={150}
                    className={"imageContainer"}
                />
                <div className={"detailsWrapper"}>
                    <div className={"title"}>
                        {`Analysis of CLV prediction`}
                    </div>
                    <h1>
                        {`Detailed Statistical Analysis Reports`}
                    </h1>
                    <p className={"description"}>
                        {`Quick has all the right tools in order 
                        to make your website building process a breeze and automatize
                         your time-consuming tasks in your development workflow.`}
                    </p>
                    <Link to="/report">
                        <button className={"analysisButton"}>
                            {`View analysis`}
                        </button>
                    </Link>
                </div>

            </section>
        </div>;
    }
}

export default Analysis;