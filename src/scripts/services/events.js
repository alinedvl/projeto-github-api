import{baseUrl, elementsQuantity} from '/src/scripts/variables.js';

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`);
    const moves = await response.json();
    return moves.filter(move => move.type === 'CreateEvent' || move.type === 'PushEvent').slice(0, elementsQuantity);
}

export{getEvents}

