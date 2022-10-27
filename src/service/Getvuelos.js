import axios from 'axios';
const URL_API = 'https://back2-production.up.railway.app/vuelos';

export const Getvuelos = async (vuelos) => {
    try {
        console.log(vuelos)
        const {data} = await axios.get(`${URL_API}?origen=${vuelos.origen}&salidaDate=${vuelos.fechaSalida}`);
        return data;
    } catch (error) {        
        return error
    }
}
export const Getvuelossensillos = async (vuelossensillos) => {
    try {
        console.log(vuelossensillos)
        const {data} = await axios.get(`${URL_API}?origen=${vuelossensillos.origen}&salidaDate=${vuelossensillos.fechaSalida}`);
        return data;
    } catch (error) {        
        return error
    }
}