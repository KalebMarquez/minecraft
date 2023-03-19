
/**
 * take a placement type ( floor, right, ceiling...) and size
 * return relative minecraft coordinates
 */


const placement = process.argv[2]
const radius = process.argv[3]

function _options = 

const options  = 
{
    placement: "ceiling",
    radius: "5",
    height: "4"
}

const options1 = {
    placement: "",
    radius: "",
    height: "",
}

getWallCoordinates( options )

function getWallCoordinates({placement, radius, height}) {

    switch (placement) {
        case 'floor': {
            return `~-${radius} ~-1 ~-${radius} ~${radius} ~-1 ~${radius}`
        }
        case 'ceiling': {
            return `~-${radius} ~-1 ~-${radius} ~${radius} ~-1 ~${radius}`
        }


        default: {
            throw new Error('Not an option')
        }
    }
}

