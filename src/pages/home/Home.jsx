import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { connect } from 'react-redux'
import './Home.css'

import Loader from './../../components/loader/Loader'
import { fetchPhotos, showAlert } from '../../redux/actions'
import PhotoCards from './../../components/photoCards/PhotoCards'
import MyAlert from './../../components/alert/MyAlert'


const Home = () => {
  const dispatch = useDispatch() 
  const loading = useSelector(state => state.photos.loading)
  const alert = useSelector(state => state.photos.alert)

  useEffect(()=> {
    dispatch(fetchPhotos())
  },[])
  
  if (loading) {
    return <Loader />    
    }

  return (
    <>
      { alert && <MyAlert text={alert}/> }
      <PhotoCards />
    </>
  )
}

const mapDispatchToProps = {
  showAlert
}

const mapStateToProps = state => ({
  alert: state.photos.alert
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)