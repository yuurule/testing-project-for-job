'use client';

import React, { useState, useEffect } from 'react';
import Post from "./Post/Post";
import Pagination from './Pagination';
import { useContext } from 'react'
import { KeywordContext } from '@/context/KeywordProvider';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PostProps } from '@/libs/interfaces';
import { getPosts } from '@/services/postServices';

const PostList = ({ posts } : { posts : PostProps[] }) => {

  const searchParams = useSearchParams();
  const keywordParams = useState<string|undefined|null>(searchParams.get('keyword'));
  const { keyword, setKeyword } = useContext(KeywordContext);
  const [postList, setPostList] = useState<PostProps[]>(posts);
  const [postsResult, setPostsResult] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(false);
  //Pagination
  const itemPerPage = 2;
  const [totalPage, setTotalPage] = useState<number[]>([1]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
    calculatePagination(posts, 1);
  }, []);

  const postsByKeyword = async (keyword:string) => {
    setLoading(true);
    await getPosts(keyword)
      .then((result:any) => {
        //console.log(result);
        setPostList(result);
        setCurrentPage(1);
        calculatePagination(result, 1);
        setLoading(false);
      })
      .catch(err => {
        console.log(`get posts err: ${err}`);
        setLoading(false);
      });
  }

  const calculatePagination = (postData:PostProps[], selectPage:number) => {
    let resultTotalPage = [];
    let tempTotalPage = Math.floor(postData.length / itemPerPage);
    if(postData.length % itemPerPage > 0) {
      tempTotalPage++
    }
    for(let i = 0; i < tempTotalPage; i++) {
      resultTotalPage.push(i + 1)
    }
    
    let tempPostsResult = [];
    if(selectPage == 1) {
      for(let i = 0; i < postData.length; i++) {
        if(i < itemPerPage) {
          tempPostsResult.push(postData[i]);
        }
      }
    }
    else { // currentPage > 1
      for(let i = 0; i < postData.length; i++) {
        if(i >= (itemPerPage * (selectPage - 1)) && i < (itemPerPage * (selectPage))) {
          tempPostsResult.push(postData[i]);
        }
      }
    }

    setPostsResult(tempPostsResult);
    setTotalPage(resultTotalPage);
  }

  const handleSelectPage = (selectPage:number) => {
    setCurrentPage(selectPage);
    calculatePagination(postList, selectPage);
  }

  return (
    <div className='posts position-relative'>
    {
      keywordParams && keyword != '' &&
      <Link
        href="/"
        className='back-home'
        onClick={() => {
          setKeyword('');
          postsByKeyword('');
        }}
      >
        กลับหน้าแรก
      </Link>
    }
    {
      postsResult.length > 0
      ?
        <>
        {
          postsResult.map((post, index) => {
            return (
              <div key={index} className='col-12'>
                <Post 
                  postData={post}
                  postsByKeyword={postsByKeyword}
                />
              </div>
            )
          })
        }
        <div className='col-12 d-flex justify-content-between py-3'>
          <div>
            <p> Page {currentPage}/{totalPage.length}</p>
          </div>
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            handleSelectPage={handleSelectPage}
          />
        </div>
        </>
      :
      <p>ไม่มีบทความ</p>
    }
    </div>
  )
}

export default PostList;