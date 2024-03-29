export const calculateWinner = (squares: (null | string)[]) => {
    const bingoLine = [
        // 가로 라인
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        // 세로 라인
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        // 대각선 라인
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];

    for (let i = 0; i < bingoLine.length; i++) {
        const [a, b, c, d] = bingoLine[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
            return squares[a];
        }
    }

    return null;
};

// 3*3 틱택토 게임에서 calculateWinner
// export const calculateWinner = (squares: (null | string)[]) => {
//     const bingoLine = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     for (let i=0; i<bingoLine.length; i++){
//         const [a,b,c] = bingoLine[i]
//      한 줄이 나란히 a, b, c가 같은 값일 때 승리자는 x or o가 됩니다.
//         if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
//     }

//     return null
// };
