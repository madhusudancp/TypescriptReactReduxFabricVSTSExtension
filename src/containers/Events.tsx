import { connect } from 'react-redux'
import EventsView from '../components/EventsView'
import { addUser} from '../actions/authorActions'
import { State } from '../reducers'
import { getUsersFromState } from '../selectors/todos';

const mapStateToProps = (state: State) => ({
  users: getUsersFromState(state)
})

export default connect<any, any, any>(mapStateToProps, {
  createEvents: addUser
})(EventsView)