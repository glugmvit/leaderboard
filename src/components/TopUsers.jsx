

function TopUsers({topuser}) {
    console.log(topuser)




    return (

        <div className="row">

            <User user= {topuser&&topuser[1]} rank={2} />
            <User user= {topuser&&topuser[0]} rank={1}leader="leaderboard-card--first" />
            <User user = {topuser&&topuser[2]} rank = {3} />
        </div>

    );
}

function User(props) {
    console.log(props)
    return (
        <div className="col-sm-4">
            <div className={`leaderboard-card ${props.leader}`}>
                <div className="leaderboard-card__top">
                    <h3 className="text-center">{props.rank}</h3>
                </div>
                <div className="leaderboard-card__body">
                    <div className="text-center">
                        <img src={props.user.avatar} className="circle-img mb-2" alt="User Img" />

                        <h5 className="mb-0">{props.user.username}</h5>
                        <p className="text-muted mb-0">@{props.user.username}</p>
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUsers;
