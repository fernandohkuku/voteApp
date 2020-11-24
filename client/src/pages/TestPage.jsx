import React, { Component } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Poll from '../components/poll'


const TestPage = () => {
   return( <div>
        <ErrorMessage/>
        <Poll />
    </div>)
}

export default TestPage