import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lambdaActions from 'redux/modules/lambda';
import { withDone } from 'react-router-server'; 

class Lambda extends Component {
    componentWillMount() {
        const { lambdaActions, data, done } = this.props;
        lambdaActions.getTest().then(done, done); // Promise 가 성공했을때, 혹은 실패했을때 done() 호출
    }

    render() {
        const { data } = this.props;

        const Word = data.map(word => <li>{word}</li>)

        return (
            <div>
                <ul>

                  {Word}
                </ul>
            </div>
        );
    }
}

// withDone 으로 감싸주면, done 이 호출될때까지 렌더링을 미룹니다
export default withDone(connect(
    (state) => ({
      data: state.lambda.data
    }),
    (dispatch) => ({
        lambdaActions: bindActionCreators(lambdaActions, dispatch)
    })
)(Lambda));