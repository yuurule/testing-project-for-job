import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Post from './components/Post/Post';
import Pagination from './components/Pagination';
import { getPosts } from './services/postServices';

const dummyPosts = [
  {
    title: "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
    eid: "4",
    url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
    description: 'จังหวะ จะเที่ยว "บ้านอีต่อง เหมืองปิล็อก" ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก',
    photos: [
        "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg"
    ],
    tags: [
        "จุดถ่ายรูป",
        "หมู่บ้าน",
        "ภูเขา",
        "ธรรมชาติ",
        // "ถ่ายรูปสวย",
        // "บ้านอีต่องเหมืองปิล็อก",
        // "กาญจนบุรี"
    ]
  },
  {
    "title": "เที่ยวญี่ปุ่นไปกับภูเขาไฟชื่อดังให้สุดฟินจาก 15 มุมสุดงาม~",
    "eid": "8",
    "url": "https://www.wongnai.com/trips/views-around-fuji",
    "description": "สายถ่ายรูปห้ามพลาด! ลุยเที่ยวญี่ปุ่น ชมภูเขาไฟฟูจิ ทิวทัศน์รอบทิศหลากมุม งามไม่รู้ลืม",
    "photos": [
        "https://img.wongnai.com/p/1600x0/2019/06/04/371f3bfad9cd46399f30c8b04c816597.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/93b7b555b624490680ebe7b0a16b0519.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/bf2c001a72314452a261bff3f039ccdc.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/37b377e43f344da794cb3353aeca3fcf.jpg"
    ],
    "tags": [
        "จุดถ่ายรูป",
        "ต่างประเทศ",
        "ญี่ปุ่น",
        "ธรรมชาติ",
        //"ภูเขา"
    ]
  },
  {
      "title": "เที่ยวฟินแลนด์แบบฟิน ๆ ไปฟาร์ม Husky ขี่ Reindeer เล่น Snowmobile",
      "eid": "10",
      "url": "https://www.wongnai.com/trips/trip-at-finland",
      "description": "ใครว่าเที่ยวฟินแลนด์ มีแค่ล่าแสงเหนือ กิจกรรมกลางหิมะเค้าก็มีให้ทำเพียบ! ทั้งขี่ Husky, Reindeer ขับเจ็ทสกีหิมะท่ามกลางภูเขาอุณภูมิติดลบ ต้องลองสักครั้งในชีวิต",
      "photos": [
          "https://img.wongnai.com/p/1600x0/2019/05/21/cd54e9c640694a95b7e0103b0ead5408.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/21/cf792ff02ab0491b9f30d67d33634f78.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/21/e87ce6e73c634532afd50dd02517fee9.jpg",
          "https://img.wongnai.com/p/1600x0/2019/05/21/ea0f93584b3c4f3ba0680fcc11bc3a13.jpg"
      ],
      "tags": [
          "ต่างประเทศ",
          "ฟินแลนด์",
          "หิมะ",
          "ธรรมชาติ"
      ]
  }
]

const Home = () => {

  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState('');
  const [posts, setPosts] = useState([]);
  const [postsResult, setPostsResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  //Pagination
  const itemPerPage = 2;
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
    const fetchPosts = async () => {
      setLoading(true);
      await getPosts(searchParams.get('keyword'))
        .then(res => {
          if(res.RESULT_CODE != '0') {
            throw new Error('get posts failed');
          } 
          //console.log(res.RESULT_DATA);
          const result = res.RESULT_DATA;
          setPosts(result.trips);
          setCurrentPage(1);
          calculatePagination(result.trips, 1);
          setLoading(false);
        })
        .catch(err => {
          console.log(`get posts err: ${err}`);
          setLoading(false);
        });
    } 

    setKeyword(searchParams.get('keyword'));
    fetchPosts();

    
  }, [refresh])

  const calculatePagination = (postData, selectPage) => {
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

  const handleSelectPage = (selectPage) => {
    setCurrentPage(selectPage);
    calculatePagination(posts, selectPage);
  }

  const handleRefresh = () => setRefresh(prevState => prevState + 1);

  return (
    <main className="site-wrapper">
      <div className="container">
        <div className="row">
          <header className="col-12 page-header">
            <h1 className="page-title">เที่ยวไหนดี</h1>
            <div className='d-flex justify-content-center position-relative'>
              {
                keyword && keyword != '' &&
                <Link 
                  to="/" 
                  onClick={() => {
                    setKeyword('');
                    handleRefresh();
                  }}
                  className='back-home'>กลับหน้าแรก</Link>
              }
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
          
          {
            loading 
            ? 
            <p className='text-center my-5'>...กรุณารอสักครู่</p>
            :
              postsResult.length > 0
              ?
                <>
                {
                  postsResult.map((post, index) => {
                    return (
                      <div key={index} className='col-12'>
                        <Post 
                          postData={post}
                          refresh={handleRefresh} />
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
      </div>
    </main>
  )
}

export default Home;