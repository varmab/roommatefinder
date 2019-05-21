import React, { Component } from 'react'

class MyRequests extends Component {
    constructor() {
        super();

        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        fetch('/api/roommaterequests/myrequests',{
            headers: {
                'Accept': 'application/json',
                'x-access-token': localStorage.getItem("token")
              },
        })
            .then((response) => response.json())
            .then((requests) => {
                this.setState({
                    requests
                })
            })
    }

    render() {
        return (
            <section className="crew-4">
                <div className="container">
                    <h3>My Requests</h3>
                    <div className="members">
                        {
                            this.state.requests.map((request) => {
                                return (<div className="member-wrapper" key={request._id}>
                                    <div className="member">
                                        <div className="photo-wrapper">
                                            <div className="photo"><img src="startup/common-files/img/crew/sergey-s.png" alt="" /></div>
                                        </div>
                                        <div className="info">
                                            <div className="name">{request.city} - {request.area}</div>
                                            <div>Roommates Needed: {request.roommates}</div>
                                            <div>Rent: Rs {request.rent}</div>
                                            <button>Email</button>
                                            <button>Call</button>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default MyRequests;