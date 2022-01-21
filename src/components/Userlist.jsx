// create 10 fake users with name username and image link
const users = {
    user1: {
        name: 'Avikant',
        username: 'avikantsrivastava',
        image: 'img/user1.jpg'
    },
    user2: {
        name: 'Kushagra',
        username: 'kush',
        image: 'img/user2.jpg'
    },
    user3: {
        name: 'Eminem',
        username: 'slimshady',
        image: 'img/user3.jpg'
    },
    user4: {
        name: 'Shivam',
        username: 'shivam',
        image: 'img/user4.jpg'
    },
    user5: {
        name: 'Kapil',
        username: 'kapil',
        image: 'img/user5.jpg'
    },
    user6: {
        name: 'Vinod',
        username: 'vinod',
        image: 'img/user6.jpg'
    },
    user7: {
        name: 'Deepak',
        username: 'deepak',
        image: 'img/user7.jpg'
    },
    user8: {
        name: 'Ajay',
        username: 'ajay',
        image: 'img/user8.jpg'
    },
    user9: {
        name: 'Vishal',
        username: 'vishal',
        image: 'img/user9.jpg'
    },
    user10: {
        name: 'Naveen',
        username: 'naveen',
        image: 'img/user10.jpg'
    }
}


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
                {users.map(user => <User user={user} />)}
                </tbody>
            </table>
        </div>
    );
}

//  pass user json as a prop and use the user json to create a table
function User(props) {
    const user = props.user;
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