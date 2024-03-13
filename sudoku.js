// Given a 9x9 grid (2d array), determine if the sudoku board is valid
// Made up of 9 3x3 sub-boxes 

function validSudoku(board) {
    // Check each row\



    for (let i = 0; i < 9; i++) {
        let rows = {}
        let columns = {}
        for (let j = 0; j < 9; j++) {
            if (rows[board[i][j]] === undefined) {
                rows[board[i][j]] = 1
            } else {
                return false;
            }

            if (rows[board[j][i]] === undefined) {
                columnns[board[j][i]] = 1
            } else {
                return false;
            }
        }

    }

    // Check each column
    // Check each box

}