import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as PostActionCreators from '../store/action-creators/post'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(PostActionCreators, dispatch)
}