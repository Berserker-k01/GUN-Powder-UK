import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCart, mdiMagnify } from "@mdi/js";

import glockHQ from '../../assets/glockHQ.png';

import styles from "./styles.module.css";

export default function Navbar({ selected, cart, setCart }) {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={glockHQ} alt="Logo" />
                <Link to="/">GUN & POWDER UK</Link>
            </div>
            <ul className={styles.links}>
                <li className={selected === 1 ? styles.selected : ''}>
                    <Link to="/guns">GUNS</Link>
                </li>
                <li className={selected === 2 ? styles.selected : ''}>
                    <Link to="/ammo">AMMO</Link>
                </li>
                <li>
                    <Link>ACCESSORIES</Link>
                </li>
                <li>
                    <Link>BLOG</Link>
                </li>
            </ul>
            <ul className={styles.icons}>
                <li className={styles.cart}>
                    <div className={cart.length > 0 ? styles.active : ''}></div>
                    <Link to="/cart">
                        <Icon path={mdiCart} size={0.7} color="#a29889" title="Cart" />
                    </Link>
                </li>
                <li>
                    <Icon path={mdiMagnify} size={0.7} color="#a29889" title="Search" />
                </li>
            </ul>
            <div className={styles.contact}>
                <p>CONTACT</p>
            </div>
        </div>
    )
}

Navbar.defaulProps = {
    selected: 0
}