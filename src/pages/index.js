import Head from 'next/head';
import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [data, setData] = useState([
        {
            id: 0,
            value: 0,
        },
        {
            id: 1,
            value: 0,
        },
        {
            id: 2,
            value: 0,
        },
        {
            id: 3,
            value: 0,
        },
        {
            id: 4,
            value: 0,
        },
        {
            id: 5,
            value: 0,
        },
        {
            id: 6,
            value: 0,
        },
        {
            id: 7,
            value: 0,
        },
        {
            id: 8,
            value: 0,
        }
    ]);

    const handleIncrementClick = (index, value) => {
        const nextCounters = data.map((c, i) => {
            if (i === index) {
                return {
                    id: i,
                    value: parseInt(value)
                };
            } else {
                return c;
            }
        });
        setData(nextCounters);
    }

    return (
        <>
            <Head>
                <title>Penghitung Risiko Diet</title>
                <meta name="description" content="Penghitung Risiko Diet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.cardContainer}>
                    <h1 className={`${styles.headingTitle} ${inter.className}`}>Penghitung Risiko Diet</h1>
                    <div className={`${styles.grid} ${inter.className}`}>
                        <div className={styles.mainCard}>
                            <div>Makanan Cepat Saji 🍕</div>
                            <div>
                            <select onChange={(e) => handleIncrementClick(0, e.target.value)} className={styles.selectOption}>
                                <option value="3">Setiap Hari</option>
                                <option value="2">2-3x/hari</option>
                                <option value="1">1x/hari</option>
                                <option value="0" selected>Tidak Pernah</option>
                            </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Roti dan Kue 🥪</div>
                            <div>
                            <select onChange={(e) => handleIncrementClick(1, e.target.value)} className={styles.selectOption}>
                                <option value="3">Setiap Hari</option>
                                <option value="2">2-3x/hari</option>
                                <option value="1">1x/hari</option>
                                <option value="0" selected>Tidak Pernah</option>
                            </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Keripik, Cemilan Asin, Kue Kering 🥨</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(2, e.target.value)} className={styles.selectOption}>
                                    <option value="3">Setiap Hari</option>
                                    <option value="2">2-3x/hari</option>
                                    <option value="1">1x/hari</option>
                                    <option value="0" selected>Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Hot dogs, sausages 🌭</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(3, e.target.value)} className={styles.selectOption}>
                                    <option value="3">Setiap Hari</option>
                                    <option value="3">2-3x/hari</option>
                                    <option value="3">1x/hari</option>
                                    <option value="0" selected>Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Minuman Manis 🥤</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(4, e.target.value)} className={styles.selectOption}>
                                    <option value="3">Setiap Hari</option>
                                    <option value="2">2-3x/hari</option>
                                    <option value="1">1x/hari</option>
                                    <option value="0" selected>Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Kacang, Biji - Bijian, Selai Kacang 🥜</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(5, e.target.value)} className={styles.selectOption}>
                                    <option value="0" selected>Setiap Hari</option>
                                    <option value="0">2-3x/hari</option>
                                    <option value="2">1x/hari</option>
                                    <option value="3">Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Ikan, Kerang 🐟</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(6, e.target.value)} className={styles.selectOption}>
                                    <option value="0" selected>Setiap Hari</option>
                                    <option value="0">2-3x/hari</option>
                                    <option value="1">1x/hari</option>
                                    <option value="3">Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Sayur - Sayuran 🥕</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(7, e.target.value)} className={styles.selectOption}>
                                    <option value="0" selected>Setiap Hari</option>
                                    <option value="3">2-3x/hari</option>
                                    <option value="3">1x/hari</option>
                                    <option value="3">Tidak Pernah</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Buah - Buahan 🍎</div>
                            <div>
                                <select onChange={(e) => handleIncrementClick(8, e.target.value)} className={styles.selectOption}>
                                    <option value="0" selected>Setiap Hari</option>
                                    <option value="3">2-3x/hari</option>
                                    <option value="3">1x/hari</option>
                                    <option value="3">Never</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.mainCard}>
                            <div>Hasil:</div>
                            <div>
                                {data.reduce((n, {value}) => n + value, 0)} <br/>
                                
                            </div>
                        </div>
                        <div>
                            {data.reduce((n, {value}) => n + value, 0) < 10 ? '✅ Risiko diet kamu rendah.' : ''}
                            {data.reduce((n, {value}) => n + value, 0) >= 10 && data.reduce((n, {value}) => n + value, 0) <= 20 ? '⚠️ Risiko diet kamu sedang.' : ''}
                            {data.reduce((n, {value}) => n + value, 0) > 20  ? '🚫 Risiko diet kamu tinggi.' : ''}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
