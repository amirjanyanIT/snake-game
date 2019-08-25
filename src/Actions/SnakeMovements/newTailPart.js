import _ from 'lodash';

export default () => (dispatch,getState) => {

    const { Snake } = getState();

    if(Snake.scheduledTailPart && !_.isEqual(Snake.position,Snake.scheduledTailPart)){
        dispatch({ type:'SET_NEW_TAIL_PART', payload:Snake.scheduledTailPart });
        dispatch({ type:'REMOVE_SCHEDULED_TAIL_PART' });
    }
}