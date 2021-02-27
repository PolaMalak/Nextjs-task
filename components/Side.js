import RsideStyle from '../styles/RightSide.module.css'
import LsideStyle from '../styles/LeftSide.module.css'

 const Side = ({side}) => {
    console.log(side)
    return (
        <div className={`${side=="leftSide"? RsideStyle.rightSide : LsideStyle.leftSide }`}>
        </div>
    )
}
export default Side