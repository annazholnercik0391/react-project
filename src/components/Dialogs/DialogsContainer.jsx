import { connect } from "react-redux";
import { sendMessage } from "../redux/dialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from './Dialogs'
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export default compose(
  connect(mapStateToProps, {
    sendMessage
  }),
  withAuthRedirect
)(Dialogs)
