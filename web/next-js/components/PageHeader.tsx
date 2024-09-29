'use client';

import React from 'react';
import { useContext } from 'react'
import { KeywordContext } from '@/context/KeywordProvider';

const PageHeader = () => {

  const { keyword, setKeyword } = useContext(KeywordContext);

  return (
    <header className="col-12 page-header">
      <h1 className="page-title">เที่ยวไหนดี</h1>
      <div className='d-flex justify-content-center position-relative'>
        <strong className={`sub-page-title ${keyword && keyword != '' ? 'keyword' : ''}`}>
          {
            keyword && keyword != ''
            ? keyword
            : 'หาที่เที่ยวแล้วไปกัน'
          }
        </strong>
        
      </div>
      <hr />
    </header>
  )
}

export default PageHeader;