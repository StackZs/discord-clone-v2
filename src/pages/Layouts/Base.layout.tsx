import React from 'react'
import { Outlet } from 'react-router-dom';
import GuildBar from '../../components/GuildBar/GuildBar';
import s from './Base.module.scss';

type Props = {}

const BaseLayout = (props: Props) => {
  return (
    <div className={s.layout}>
      <GuildBar />
      <div className={s.container}>
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout