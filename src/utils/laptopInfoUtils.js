export const getName = (teams,id) => {
        
    const team = teams.find((item) =>{
        return item.id === id
    })
    return team.name
}

export const getPosition = (positions,id) => {
   
    const position = positions.find((item) =>{
        return item.id === id;
    })
    return position.name

}

export const getBrand = (brands,id) => {
    const brand = brands.find((item) => {
        return item.id === id;
    })

    return brand.name
}