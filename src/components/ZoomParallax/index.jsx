'use client'
import styles from './styles.module.scss';
import Picture2 from '../../../public/images/women.jpg';
import Picture3 from '../../../public/images/car.jpg';
import Picture4 from '../../../public/images/dog.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    // Scaling for parallax effect
    const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const scaleImage1 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const scaleImage2 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const scaleImage3 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(25% 40%)", "inset(0% 0%)"]);


    const pictures = [
        { src: Picture2, scale: scaleImage1 },
        { src: Picture3, scale: scaleImage2 },
        { src: Picture4, scale: scaleImage3 }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => (
                        <motion.div key={index} style={{ scale }} className={styles.el}>
                            <motion.div className={styles.imageContainer}>
                                <Image src={src} fill alt="image" />
                            </motion.div>
                        </motion.div>
                    ))
                }

                <motion.div className={styles.VideoContainer} style={{ scale: scaleVideo }}>
                    <motion.video
                        src="/images/video2.mp4"
                        style={{ clipPath }}
                        autoPlay
                        muted
                        loop
                    />
                </motion.div>
            </div>
        </div>
    );
}
