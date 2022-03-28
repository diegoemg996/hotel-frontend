import {React, useState, useEffect} from 'react'
import { useLocation  } from 'react-router-dom';

export const Index = () => {

  const { state } = useLocation();

  return (
    <div>{`Bienvenido ${state.firstName} ${state.lastName} `} </div>
  )
}
