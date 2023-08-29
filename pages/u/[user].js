import TabComponent from '@/source/modules/components/tabs/TabComponent'
import { useState } from 'react'
import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  
  const tabData = [
    {id: 1, title: 'tab1', content: 'ok'},
    {id: 2, title: 'tab2', content: 'lol'},
  ]
  return (
    <>
    <div>{router.query.user}</div>
    <TabComponent tabData={tabData}/>
    </>
  )
}

export default User