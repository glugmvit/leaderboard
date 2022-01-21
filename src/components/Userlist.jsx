// create 10 fake unique users with name username and image link
const users = [
    {
        name: 'Avikant',
        username: 'avikantsrivastava',
        image: 'img/user1.jpg',
        rank: 2,
    },
    {
        name: "Kamal",
        username: "kamal",
        img: "img/user1.jpg",
        rank: 1,

    },
    {
        name: "Sarath",
        username: "sarath",
        img: "img/user2.jpg",
        rank: 4,

    },
    {
        name: "Siva",
        username: "siva",
        img: "img/user3.jpg",
        rank: 3,
    },


];



function Userlist() {
    // pass users as prop
    return (
        <div>
            <h4>All Users</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Status</th>
                        <th>Location</th>
                        <th>Congratulate</th>
                    </tr>
                </thead>
                <tbody>
{/* sort users array by rank*/}
                    {users.sort((a, b) => (a.rank > b.rank) ? 1 : -1).map(user => (
                        <User user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function User({ user }) {

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img src="img/user1.jpg" className="circle-img circle-img--small mr-2" alt="User Img" />
                    <div className="user-info__basic">
                        <h5 className="mb-0">{user.name}</h5>
                        <p className="text-muted mb-0">@{user.username}</p>
                    </div>
                </div >
            </td>
            <td>
                <div className="d-flex align-items-baseline">
                    <h4 className="mr-1">$1,253</h4><small className="text-success"><i className="fa fa-arrow-up"></i>5%</small>
                </div>
            </td>
            <td>Bangalore</td>
            <td>
                <button className="btn btn-success btn-sm">Congratulate</button>
            </td>
        </tr>
    );
}



export default Userlist;