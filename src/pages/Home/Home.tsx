import { FC } from 'react';
import AboutImg from '../../assets/about_img.jpg';
import styles from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className="page">
      <p className={styles.intro}>
        Hello, I&apos;m an junior react developer based in Ivano-Frankivsk,
        Ukraine!
      </p>

      <div className={styles.about}>
        <div className={styles.about_text}>
          <h2 className="font-bold text-5xl">Sheikin Stanislav</h2>
          <p className="text-2xl">Junior Frontend Developer</p>
        </div>
        <img className={styles.about_img} src={AboutImg} alt="about-img" />
      </div>

      <div className="about_item mt-10">
        <h4 className="about_title text-2xl underline decoration-4 decoration-gray-500 underline-offset-8">
          Work
        </h4>

        <p className="mt-4 text-xl text-justify dark:text-teal-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eius
          corrupti illum pariatur iste officia amet sint facilis quod in nulla
          quia, nesciunt, rem modi distinctio minus! Iure, officia blanditiis.
          Lorem,{' '}
          <a className="text-cyan-500 dark:text-indigo-500" href="/">
            ipsum dolor sit
          </a>{' '}
          amet consectetur adipisicing elit. Atque eius corrupti illum pariatur
          iste officia amet sint facilis quod in nulla quia, nesciunt, rem modi
          distinctio minus! Iure, officia blanditiis. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Atque eius corrupti illum pariatur
          iste officia amet sint facilis quod in nulla quia, nesciunt, rem modi
          distinctio minus! Iure, officia blanditiis.
        </p>
      </div>
    </div>
  );
};
