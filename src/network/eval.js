import {request} from 'network/request'
import store from '../store/index';
let voteCode = store.state.currentUser.voteCode ;

export function getProjVoteTargetList(projectId){
  return request({
    url: 'getProjVoteTarget' ,
    method: 'post',
    params: {
      voteCode: voteCode,
      projectId: projectId
    }
  })
}
export function getTemplateScore(projectId,projVoteTargetId){
  return request({
    url: 'getTemplateScore' ,
    method: 'post',
    params: {
      voteCode: voteCode,
      projectId: projectId,
      projVoteTargetId: projVoteTargetId
    }
  })
}
