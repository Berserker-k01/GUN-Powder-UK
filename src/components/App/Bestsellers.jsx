import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import styles from './bestsellers.module.css';

export default function Bestsellers({ bestSellers }) {
  const sliderRef = useRef(null);

  let scrollAmount = 300;

  return (
    <section className={styles.bestSellers}>
      <div className={styles.navbar}>
        <p className="title">BESTSELLERS</p>
        <ul>
          <li onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft -= scrollAmount;
          }}>
            <Icon path={mdiChevronLeft} size={1.5} color="#a29889" />
          </li>
          <li onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft += scrollAmount;
          }}>
            <Icon path={mdiChevronRight} size={1.5} color="#a29889" />
          </li>
        </ul>
        <Link to="guns">SEE ALL PRODUCTS</Link>
      </div>
      <div className={styles.imageSlider} ref={sliderRef}>
        {
          bestSellers.map((item, index) => {
            const category = item.Category || 'Unknown Category';
            const name = item.Name || 'Unknown Product';
            const price = item.Price !== undefined ? `£${item.Price}` : 'Price Unavailable';

            return (
              <div className={styles.item} key={index}>
                <div className="image">
                  <img 
                    src={`src/data/images/${category}/${item.filename}`} 
                    alt={name} 
                  />
                </div>
                <Link to={`guns/${category.toLowerCase()}s`} className={styles.category}>
                  {category}
                </Link>
                <Link to={`product/${item.id}`}>
                  <p className={styles.name}>{name}</p>
                </Link>
                <p className={styles.price}>{price}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
