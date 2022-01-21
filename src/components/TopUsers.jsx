function TopUsers() {
    return (

        <div className="row">
            <User name="Avikant" username="avikantsrivastava" />
            <User name="Kushagra" username="kush" leader="leaderboard-card--first" />
            <User name="Eminem" username="slimshady" />
        </div>

    );
}

function User(props) {
    return (
        <div className="col-sm-4">
            <div className={`leaderboard-card ${props.leader}`}>
                <div className="leaderboard-card__top">
                    <h3 className="text-center">$1,051</h3>
                </div>
                <div className="leaderboard-card__body">
                    <div className="text-center">
                        <img src="img/user2.jpg" className="circle-img mb-2" alt="User Img" />

                        <h5 className="mb-0">{props.name}</h5>
                        <p className="text-muted mb-0">@{props.username}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="fa fa-map-marker" /> Bangalore</span>
                            <button className="btn btn-outline-success btn-sm">Congratulate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUsers;
