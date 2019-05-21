import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyRequests from '../components/MyRequests'

class MyRequestsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MyRequests />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MyRequestsPage;