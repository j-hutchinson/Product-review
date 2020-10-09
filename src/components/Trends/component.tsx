import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components'
import { ReduxState } from '../../types';

interface Props {
    ratings: number[]
}

const TrendContainer = styled.div`
    padding: 20px;
    border: 1px solid black;
    border-radius: 4px;
`;

export const StyledEmptyLabel = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 40px;
`;

export const Trends = ({ ratings }) => {
    let one = 0; let two = 0; let three = 0; let four = 0; let five = 0;
    ratings.forEach(rating => {
        if (rating === 1) one++;
        if (rating === 2) two++;
        if (rating === 3) three++;
        if (rating === 4) four++;
        if (rating === 5) five++;
    })

    const data = {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
            {
                label: 'Ratings',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#03FC28'],
                borderColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [one, two, three, four, five]
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
                    options={{ maintainAspectRatio: false }}
                /> :
                <StyledEmptyLabel>No data available, try leaving a comment!</StyledEmptyLabel>
            }
        </TrendContainer>
    )
}

export const mapStateToProps = (state: ReduxState): Props => ({
    ratings: state.allComments.map(comment => comment.rating)
})

export default connect(mapStateToProps, null)(Trends);