import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasePage from './pages/Base/Base.page';
import BaseLayout from './pages/Layouts/Base.layout';
import ChannelPage from './pages/ChannelPage/Channel.page';

type Props = {}

const App = (props: Props) => {
  return (
    <Routes>
      <Route path='/channels' element={<BaseLayout />}>
        <Route path='@me' element={<BasePage />} />
        <Route path=':id' element={<ChannelPage />} />
      </Route>
    </Routes>
  )
}

export default App