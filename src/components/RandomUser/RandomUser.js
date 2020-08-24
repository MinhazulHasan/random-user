import React from 'react';
import './RandomUser.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const RandomUser = (props) => {
    const users = props.users;
    console.log(users);
    return (
        <div className='container'>
            <h1 className='display-4 mb-3'>Random User Generate</h1>
            <div className="row">
                {
                    users.map(user => <div className="col-md-4"> <SingleUser key={user.id.value} name={user.name.first + ' ' + user.name.last} image={user.picture.large} phone={user.phone} email={user.email} country={user.location.country}></SingleUser> </div>)
                }
            </div>
        </div>
    );
};

function SingleUser(props) {
    return (
        <div className="card bg-dark">
            <img src={props.image} className="card-img-top img-thumbnail" alt="Not Found" />
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
            </div>
            <ul className="list-group">
                <li className="list-group-item bg-dark">Phone: {props.phone}</li>
                <li className="list-group-item bg-dark">Email: {props.email}</li>
                <li className="list-group-item bg-dark">Country: {props.country}</li>
            </ul>
        </div>
    )
}

export default RandomUser;