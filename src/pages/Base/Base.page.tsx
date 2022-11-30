import React from 'react'
import ActivityBar from '../../components/ActivityBar/ActivityBar';
import SideBar from '../../components/SideBar/SideBar';
import s from './Base.module.scss';
import RecentPost from './../../components/RecentPost/RecentPost';

type Props = {}

const BasePage = (props: Props) => {
  return (
    <div className={s.content}>
      <SideBar>

      </SideBar>
      <RecentPost />
      <ActivityBar />
    </div>
  )
}

export default BasePage