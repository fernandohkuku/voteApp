import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Poll from '../components/poll'


const PollPage = ({match, getPoll}) => {
   getPoll(match.params.id)

   return (
       <div>
           <ErrorMessage/>
           <Poll/>
       </div>
   )
}

export default PollPage