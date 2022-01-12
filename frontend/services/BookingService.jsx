import axios from 'axios';
const BOOKING_REST_API_URL = 'http://localhost:8080/booking'
class BookService {
    getBookings() {
        return this.axios.get(BOOKING_REST_API_URL);
    }
}
export default new BookService();
