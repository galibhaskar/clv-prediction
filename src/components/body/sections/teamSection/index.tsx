import * as React from 'react';
import TeamConfig from '../../../../configs/TeamConfig';
import './styles.scss';

export interface ITeamSectionProps {
    id: string
}

export interface ITeamSectionState { }

class TeamSection extends React.Component<ITeamSectionProps, ITeamSectionState> {
    constructor(props: ITeamSectionProps) {
        super(props);
        this.state = {}
    }

    private renderUserProfile = (index: number, user: any) => {
        return <div
            key={index}
            className={"userProfileContainer"}
        >
            <img
                src={user.profilePicture}
                alt=""
                className={"profilePicture"}
            />
            <div className={"userDetails"}>
                <h5>{user.displayName}</h5>
                <h6>{user.designation}</h6>
                <span>{user.department}</span>
            </div>
        </div>;
    }

    public render() {
        return <div className={"teamSectionContainer"} id={this.props.id}>
            <section className={"teamWrapper"}>
                <div className={"detailsWrapper"}>
                    <h1 className={"teamTitleText"}>
                        {`Our team members`}
                    </h1>
                </div>
                <div className={"personsContainer"}>
                    {
                        TeamConfig.map((_teamMember, index: number) => this.renderUserProfile(index, _teamMember))
                    }
                </div>
            </section>
        </div>;
    }
}

export default TeamSection;