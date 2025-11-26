import React from 'react'
import styles from './MemeSVGViewer.module.css'
interface IMemeSvgViewerProps  {}

const MemeSvgViewer :React.FC<IMemeSvgViewerProps>= ({}) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">MemeSvgViewer</div>
  )
}

export default MemeSvgViewer