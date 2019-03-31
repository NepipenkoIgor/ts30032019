import {connect} from "react-redux";
import {Content, IFields} from "./content";
import {Dispatch} from "redux";
import {IStore} from "../../store";
import {getUsersPending} from "../../store/actions/users.action";

const mapStateToProps = (state: IStore): IFields => ({
    searchTerm: state.searchTerm,
    users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUsersPending()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);