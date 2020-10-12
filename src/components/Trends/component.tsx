import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import {
    colourWheel,
    backgroundColors,
    hoverColors,
    spacing
} from '../../css/tokens';
import { StoreContext } from '../../store/StoreProvider';

interface Props {
    ratings: number[];
}

const TrendContainer = styled.div`
    padding: ${spacing.medium};
    border: 1px solid black;
    border-radius: 4px;
`;

export const StyledEmptyLabel = styled.div`
    text-align: center;
    margin: auto;
    padding-top: ${spacing.large};
`;

export const Trends = (): JSX.Element => {
    const { state: { allComments } } = useContext(StoreContext);
    let zero = 0; let one = 0; let two = 0; let three = 0; let four = 0; let five = 0;
    let ratings = allComments.map(comment => comment.rating);
    ratings.forEach((rating: number): void => {
        if (rating === 0) zero++;
        if (rating === 1) one++;
        if (rating === 2) two++;
        if (rating === 3) three++;
        if (rating === 4) four++;
        if (rating === 5) five++;
    })

    const data = {
        labels: ['0 stars', '1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
        datasets: [
            {
                label: 'Ratings',
                backgroundColor: backgroundColors,
                borderColor: colourWheel.border.main,
                borderWidth: 1,
                hoverBackgroundColor: hoverColors,
                hoverBorderColor: colourWheel.border.hover,
                data: [zero, one, two, three, four, five]
            }
        ]
    };

    return (
        <TrendContainer>
            {ratings.length ?
                <Doughnut
                    data={data}
                    width={100}
                    height={50}
                    options={{ responsive: true, maintainAspectRatio: false }}
                />
                :
                <StyledEmptyLabel>No data available, try leaving a comment!</StyledEmptyLabel>
            }
        </TrendContainer>
    )
}

export default Trends;