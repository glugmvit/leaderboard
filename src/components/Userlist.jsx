import { useState, useEffect } from 'react';



function Userlist({setTopUser}) {

    const [user_data, setUser] = useState(null);

    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
          const response = await fetch("https://63d8-49-36-218-186.ngrok.io/getdata");
          const data = await response.json();

          // store the data into our books variable
          setUser(data) ;
          setTopUser(data.key.sort((a, b) =>(a.score < b.score)  || (a.round < b.round) || (a.timestamp < b.timestamp ) ? 1 : -1).slice(0,3))
        }

      }, // eslint-disable-next-line
      [user_data]); // <- you may need to put the setBooks function in this array


      console.log(user_data&&user_data.key )

    //   let user = user_data['key']
    //   console.log(user)

    // pass users as prop
    return (
        <div>
            <h4>All Users</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Score</th>
                        <th>Round</th>
                    </tr>
                </thead>
                <tbody>
{/* sort users array by rank*/}
                    {user_data&&user_data.key.sort((a, b) =>(a.score < b.score)  || (a.round < b.round) || (a.timestamp < b.timestamp ) ? 1 : -1).map((user) => (
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
                    <img src={user.avatar} className="circle-img circle-img--small mr-2" alt="User Img" />
                    <div className="user-info__basic">
                        <h5 className="mb-0">{user.name}</h5>
                        <p className="text-muted mb-0">@{user.username}</p>
                    </div>
                </div >
            </td>
            <td>
                <div className="d-flex align-items-baseline">
                    <h4 className="mr-1">{user.score}</h4>
                    {/* <small className="text-success"><i className="fa fa-arrow-up"></i>5%</small> */}
                </div>
            </td>
            <td>
                {Math.floor(user.round / 10)}

            </td>
        </tr>
    );
}



export default Userlist;