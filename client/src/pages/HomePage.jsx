import React, {Component} from 'react'
import Polls from '../components/polls'
import ErrorMessage from '../components/ErrorMessage'

const HomePage = props => <div>
    <ErrorMessage/>
    <Polls {...props}/>
</div> 


export default HomePage