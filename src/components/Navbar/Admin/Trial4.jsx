import React from 'react'
import Trial from './Trial'
import Trial2 from './Trial2'
import Trial3 from './Trial3'
import { Paper } from '@material-ui/core'


const Trial4 = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 my-8 gap-8 px-2'>
        <div>
            <Paper elevation={4}>
                <Trial/>
            </Paper>
            
        </div>
        <div>
            <Trial2/>
        </div>
        <div>
            <Trial3/>
        </div>
        <div>how</div>
        <div>heart</div>
        <div>house</div>

     
    </div>
  )
}

export default Trial4
