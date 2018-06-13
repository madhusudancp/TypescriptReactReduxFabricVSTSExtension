import { connect } from 'react-redux'
import EventsView from '../components/EventsView'
import { addUser} from '../actions/authorActions'

export default connect<any, any, any>(null, {
  createEvents: addUser
})(EventsView)