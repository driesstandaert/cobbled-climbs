export const selectClimb = (idName = {}
    ) => ({
        type: 'SELECT_CLIMB',
        idName
    })

export const selectTheme = (theme = {}
    ) => ({
        type: 'SELECT_THEME',
        theme
    })
