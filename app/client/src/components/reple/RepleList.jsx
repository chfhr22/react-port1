import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RepleCont from './RepleCont';

const RepleList = () => {
  const [repleList, setRepleList] = useState([]);

  useEffect(() => {
    axios.post("/api/reple/getReple")
    .then((response) => {
      console.log(response)
      if(response.data.success){
        setRepleList([...response.data.repleList])
      }
    })
  }, [])

  return (
    <div className="comment__view">
      {repleList.map((reple, idx) => {
        return (
          <RepleCont reple={reple} key={idx} />
        )
        })}
    </div>
  )
}

export default RepleList