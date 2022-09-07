import {connect} from "react-redux";
import {HomeScreen} from "./Home";
import {updatePhoneNumberCreator} from "../../redux/home-reducer";

const mapStateToProps = (state) => {
    return {
        phoneNumber: state.homeScreen.phoneNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePhoneNumber: (phoneNumber) => {
            dispatch(updatePhoneNumberCreator(phoneNumber))
        }
    }
}

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeScreenContainer