import React from 'react'
import s from './Sidebar.module.scss';

interface ISidebar {
  children: React.ReactElement | React.ReactNode
}

const SideBar: React.FC<ISidebar> = ({children}) => {
  return (
    <div className={s.css}>{children}</div>
  )
}

export default SideBar