import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './signinSlice'
import {Btn,Form,Input,Papers,Div,Containers} from '../../Component/component'
import { Button } from '@material-ui/core'
export default function Signin() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Containers>
        <Papers>
            <Input/>
            <Input/>
            <Btn name={"my"}/>
        </Papers>
    </Containers>
  )
}