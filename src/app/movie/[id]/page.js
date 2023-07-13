import styles from '@/app/styles/common.module.css';
import Image from 'next/image';

const page = async ({ params }) => {
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8598aa0d50msh2ea3694ea6c8322p175e16jsn88a2608d2f32',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;
    console.log(data);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>BingeFlix \ <span>{main_data.type}</span></h2>
                <div className={styles.single_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={550} height={300} className={styles.main_img} />
                    </div>

                    <div>
                        <h1>{main_data.title}</h1>
                        <h3>Total Seasons : {main_data.seasonCount}</h3>
                        <h3>Total Episodes : {main_data.episodeCount}</h3>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;