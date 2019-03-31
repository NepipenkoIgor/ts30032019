import {connect} from "react-redux";
import {Header} from "./header";
import {Dispatch} from "redux";
import {searchByTerm} from "../../store/actions/search-term.action";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    search: (term: string) => dispatch(searchByTerm(term)),
})
export default connect(null, mapDispatchToProps)(Header);