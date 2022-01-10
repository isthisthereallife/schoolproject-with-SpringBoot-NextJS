import React from 'react';
import BookingService from '../services/BookingService';
import { Navbar } from 'react-bootstrap';

class BookingComponentTest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        BookingService.getBookings().then((Response) => {
            this.setState({ books: Response.data })
        });
    }


    render() {
        return (
            <div>
                <Navbar bg="info" variant="dark">
                    <Navbar.Brand href="#">Bookings page</Navbar.Brand>
                </Navbar>
                <h1 className="text-center mt-5"> List of Bookings</h1>
                <div className="container mt-2">
                    <table className="table table-bordered border-info">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Type of service</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.bookings.map(
                                    (bookings) => <tr key={bookings.booking_id}>
                                            <td>{bookings.booking_id}</td>
                                            <td>{type_of_service}</td>
                                            <td>{bookings.first_name}</td>
                                            <td>{bookings.last_name}</td>
                                            <td>{bookings.address}</td>
                                            <td>{bookings.e_mail}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default BookingComponentTest
