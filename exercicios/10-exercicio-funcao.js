
import { DOGS } from './10-exercicio-dados.js'

function entregarPetiscos(listaDeDogs){
    listaDeDogs.forEach(dogs => {
        console.log ( `Entregando petisco para ${DOGS}`)
    })
}

entregarPetiscos(DOGS)