import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewRoommateRequest from '../components/NewRoommateRequest'

class NewRoommateRequestPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <NewRoommateRequest />
                <Footer />
            </React.Fragment>
        )
    }
}

export default NewRoommateRequestPage;