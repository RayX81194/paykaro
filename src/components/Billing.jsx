import {bill, apple, google} from "../assets"
import styles, { layout } from "../style"
import Button from "./Button" 

const Billing = () => (
    <div id="product" data-aos="fade-up" className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="card" className="w-[100%] h-[100%]"/>
        </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your<br className="sm:block hidden"/> billing & invoicing.     
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
          aliquid deleniti ab culpa aut recusandae ea nulla cumque quibusdam 
          earum dolor, error repellendus ad? Hic culpa ipsum laborum officia
          maiores.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>    
            <img src={google} className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>    
      
        </div>
    </div>    
  </div>
)


export default Billing