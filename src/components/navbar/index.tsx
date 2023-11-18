import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarHiddenItems, navbarItems } from "../../utils/constants";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={styles.navbar}
      onMouseEnter={() => setIsOpen((prev) => (prev = true))}
      onMouseLeave={() => setIsOpen((prev) => (prev = false))}
    >
      <div className={styles.content}>
        {navbarItems.map((item) => (
          <Link
            to={"/"}
            className={`${styles.navbarItem} ${
              item.itemTitle === "Home" && styles.active
            }`}
          >
            <img src={item.iconSrc} alt={item.itemTitle} />
          </Link>
        ))}
      </div>
      {isOpen && (
        <div className={styles.openedContent}>
          <div className={styles.user}>
            <img className={styles.avatar} src="/avatar.webp" alt="avatar" />
            <p>Daniel</p>
          </div>
          <div className={styles.navigationItems}>
            {navbarItems.map((item) => (
              <Link
                to={"/"}
                className={`${styles.navbarItem} ${
                  item.itemTitle === "Home" && styles.active
                }`}
              >
                <img src={item.iconSrc} alt={item.itemTitle} />
                <p>{item.itemTitle}</p>
              </Link>
            ))}
          </div>
          <div className={styles.navbarHiddenElements}>
            {navbarHiddenItems.map((item) => (
              <Link to={"/"} className={styles.navbarHiddenItem}>
                <p>{item}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
