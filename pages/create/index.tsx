import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

interface CardState {
    cardClicked: boolean,
    cardValue: number
}

class GameCreator extends React.Component<{}, CardState> {
    constructor(props) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.state = {
            cardClicked: false,
            cardValue: 0
        };
    }

    handleCardClick(value: number) {
        this.setState({
            cardClicked: true,
            cardValue: value
        });
    }

    render() {
        const cards = [1, 3, 5, 8, 13];
        const cardClicked = this.state.cardClicked;
        let mainCard;
        if (cardClicked) {
            mainCard = <div className={styles.cardLarge}>{this.state.cardValue}</div>
        }
        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                    New Game
                    </h1>
                    <div>
                        {mainCard}
                    </div>
                    <div className={styles.grid}>
                        {cards.map(card => (
                            <div key={card} onClick={() => this.handleCardClick(card)}className={styles.card}>
                                <a>{card}</a>
                            </div>
                        ))}
                    </div>
                    <Link href="/">
                        <div className={styles.card}>
                                <a>Home</a>
                        </div>
                    </Link>
                </main>
            </div>
        );
    }
}

export default GameCreator;