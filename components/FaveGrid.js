import React from 'react';
import styles from './FaveGrid.module.css';
import FaveItem from '../components/FaveItem';

const FaveGrid = () => (
    <div>
        <div className={styles.intro}>
            <h2 className={styles.title}>A curation of some of my favourites!</h2>
        </div>
        <div className={styles.gridcontainer}>
            <FaveItem
                src="/images/shoe.png"
                alt="image4"
                title="Running"
                description="I used to do xcountry before uni, getting back into it now."
            />
            <FaveItem
                src="/images/sonic.png"
                alt="image5"
                title="Sonic"
                description="I like Sonic."
            />
            <FaveItem
                src="/images/spelunky2.jpg"
                alt="image6"
                title="Spelunky 2"
                description="I used to grind this game for hours! It's filled with endless surprises and lore."
            />
            <FaveItem
                src="/images/hunter-x-hunter.jpg"
                alt="image2"
                title="HunterxHunter"
                description="My favourite anime - it does everything well, from characters to soundtrack to action scenes."
            />
            <FaveItem
                src="/images/icecoffee.png"
                alt="image3"
                title="Iced coffee"
                description="Even in the winter. And especially with caramel!"
            />
            <FaveItem
                src="/images/brovisitedhisfriend.jpg"
                alt="image1"
                title="yeah so i went to go visit my friend-"
                description="bro visited his friend"
            />
        </div>
    </div>
);

export default FaveGrid;
