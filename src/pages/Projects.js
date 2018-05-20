import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActions from 'redux/modules/projects';
import { withDone } from 'react-router-server'; 

class Lambda extends Component {
    componentWillMount() {
        const { projectActions, data, done } = this.props;
        projectActions.getProjects().then(done, done); // Promise 가 성공했을때, 혹은 실패했을때 done() 호출
    }

    render() {
        const { data } = this.props;

        const Project = data.map(company => company.project.map(project =>
            <ul>
                <li>{project.title}</li>
                <li>{project.desc}</li>
                <li>{project.date}</li>
                <li>{project.company}</li>
            </ul>
        ))

        return (
            <div className='home-con'>
                { Project }
            </div>
        );
    }
}

// withDone 으로 감싸주면, done 이 호출될때까지 렌더링을 미룹니다
export default withDone(connect(
    (state) => ({
      data: state.projects.data
    }),
    (dispatch) => ({
        projectActions: bindActionCreators(projectActions, dispatch)
    })
)(Lambda));