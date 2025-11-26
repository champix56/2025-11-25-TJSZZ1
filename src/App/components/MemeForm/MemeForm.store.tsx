import { useDispatch, useSelector } from 'react-redux'
import MemeFormUnconnected from './MemeForm'
import type { MemeInterface } from 'orsys-tjs-meme'
import { update } from '../../store/current';


const MemeForm = (props) => {
  const images=  useSelector(s=>s.ressources.images);
  const d=useDispatch();
  return (
    <MemeFormUnconnected {...props} images={images} onMemeChange={(meme:MemeInterface)=>{
        d(update(meme))
    }}/>
  )
}

export default MemeForm